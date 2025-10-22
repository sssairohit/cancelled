import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const geminiService = {
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
