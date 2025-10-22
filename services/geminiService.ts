import { GoogleGenAI, Type } from "@google/genai";
import type { Celebrity } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const geminiService = {
  generateInitialCelebrities: async (): Promise<Celebrity[]> => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Generate a list of 3 diverse, currently trending or controversial celebrities. For each, provide a name, a one-sentence description, a placeholder image URL from `https://picsum.photos/300/400`, and initial upvote/downvote counts reflecting public sentiment. Also, generate 2-3 initial comments for each celebrity's discussion thread. The 'reasons' array for each celebrity must be an empty array `[]`. Ensure the data structure matches the provided JSON schema.",
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING, description: 'Unique ID' },
                name: { type: Type.STRING },
                image: { type: Type.STRING, description: 'A URL from https://picsum.photos/300/400' },
                description: { type: Type.STRING },
                upvotes: { type: Type.INTEGER },
                downvotes: { type: Type.INTEGER },
                reasons: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      id: { type: Type.STRING },
                      text: { type: Type.STRING },
                      type: { type: Type.STRING },
                    },
                    required: ['id', 'text', 'type'],
                  },
                },
                comments: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            id: { type: Type.STRING },
                            author: { type: Type.STRING, description: 'A random username' },
                            text: { type: Type.STRING },
                            timestamp: { type: Type.STRING, description: 'An ISO date string' }
                        },
                        required: ['id', 'author', 'text', 'timestamp']
                    }
                }
              },
              required: ['id', 'name', 'image', 'description', 'upvotes', 'downvotes', 'reasons', 'comments']
            },
          },
        },
      });
      
      const jsonStr = response.text;
      const celebrities = JSON.parse(jsonStr);
      // Ensure reasons is an empty array to start, just in case the model hallucinates some.
      return celebrities.map((c: any) => ({ ...c, reasons: [] }));
    } catch (error) {
      console.error("Error generating initial celebrities:", error);
      // Return hardcoded data on failure to allow UI to function
      return [
          { id: '1', name: 'Tech Mogul', image: 'https://picsum.photos/300/400?random=1', description: 'Known for revolutionary tech and controversial tweets.', upvotes: 12500, downvotes: 8300, reasons: [], comments: [{ id: 'c1', author: 'Techie1', text: 'Love the new products!', timestamp: new Date().toISOString() }] },
          { id: '2', name: 'Pop Diva', image: 'https://picsum.photos/300/400?random=2', description: 'Chart-topping artist whose every move is scrutinized.', upvotes: 250000, downvotes: 15000, reasons: [], comments: [{ id: 'c2', author: 'MusicFan', text: 'Her last album was a masterpiece.', timestamp: new Date().toISOString() }] },
      ];
    }
  },

  generateVoteReason: async (celebrityName: string, voteType: 'upvote' | 'downvote'): Promise<string> => {
    try {
      const prompt = `Generate a short, plausible reason (3-6 words) for an '${voteType}' on the celebrity '${celebrityName}'. The tone should be casual, like a social media comment.`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      return response.text.replace(/"/g, ''); // Clean up response
    } catch (error) {
      console.error("Error generating vote reason:", error);
      return voteType === 'upvote' ? "Just a fan!" : "Not impressed lately.";
    }
  },
};