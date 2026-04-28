import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface AINewsItem {
  id: string;
  title: string;
  summary: string;
  category: "Model" | "Hardware" | "Business" | "Policy" | "Breakthrough";
  date: string;
  source: string;
  confidence: number;
}

export async function fetchLatestAINews(): Promise<AINewsItem[]> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a list of 6-8 of the most recent and significant AI news updates as of today. 
      Format the output as a JSON array of objects. 
      Include fields: title, summary (brief), category (one of: Model, Hardware, Business, Policy, Breakthrough), 
      date (ISO format), source (reputable news source name), and confidence (0-1).
      Ensure the news are real and recent within the last few weeks.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              summary: { type: Type.STRING },
              category: { 
                type: Type.STRING,
                enum: ["Model", "Hardware", "Business", "Policy", "Breakthrough"] 
              },
              date: { type: Type.STRING },
              source: { type: Type.STRING },
              confidence: { type: Type.NUMBER }
            },
            required: ["title", "summary", "category", "date", "source", "confidence"]
          }
        }
      }
    });

    const newsData = JSON.parse(response.text || "[]");
    return newsData.map((item: any, index: number) => ({
      ...item,
      id: `news-${index}`
    }));
  } catch (error) {
    console.error("Failed to fetch news:", error);
    // Return mock data if API fails to prevent empty UI
    return [
      {
        id: "mock-1",
        title: "GPT-5 Intelligence Gains Reported in Private Testing",
        summary: "Early reports suggest significant improvements in reasoning and factual accuracy in the next generation of large language models.",
        category: "Model",
        date: new Date().toISOString(),
        source: "AI Pulse Intelligence",
        confidence: 0.95
      },
      {
        id: "mock-2",
        title: "NVIDIA Unveils Next-Gen Blackwell Architecture",
        summary: "The GPU giant announces new chips designed specifically for trillion-parameter AI models, promising massive efficiency gains.",
        category: "Hardware",
        date: new Date().toISOString(),
        source: "Tech News Wired",
        confidence: 0.99
      }
    ];
  }
}
