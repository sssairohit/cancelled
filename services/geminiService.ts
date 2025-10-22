import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const geminiService = {
  generateLikeReason: async (celebrityName: string): Promise<string> => {
    try {
      const prompt = `Generate a short, positive, and plausible reason (3-6 words) for liking the celebrity '${celebrityName}'. The tone should be casual, like a social media comment. For example: "Always innovating and pushing boundaries." or "Her music is just iconic."`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      return response.text.replace(/"/g, ''); // Clean up response
    } catch (error) {
      console.error("Error generating like reason:", error);
      return "Just a big fan!";
    }
  },

  searchCelebrity: async (celebrityName: string): Promise<{name: string; biography: string} | null> => {
    try {
      const prompt = `Provide a short, one-sentence biography for the celebrity: "${celebrityName}". Return only the JSON object.`;
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              name: {
                type: Type.STRING,
                description: "The official name of the celebrity."
              },
              biography: {
                type: Type.STRING,
                description: "A concise, one-sentence biography of the celebrity, capturing their primary notability."
              }
            },
            required: ["name", "biography"]
          }
        }
      });

      const jsonStr = response.text.trim();
      const result = JSON.parse(jsonStr);
      return result;

    } catch (error) {
      console.error("Error searching for celebrity:", error);
      return null;
    }
  },
};
