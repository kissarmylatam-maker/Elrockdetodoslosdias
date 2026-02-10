
import { GoogleGenAI, Type } from "@google/genai";
import { AICreativeInsight } from "../types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
if (!apiKey) {
  console.warn('VITE_GEMINI_API_KEY is not set');
}
const ai = new GoogleGenAI({ apiKey });

export const getCreativeInsight = async (topic: string): Promise<AICreativeInsight> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Genera una visión crítica y editorial sobre: ${topic}. Incluye un puntaje del 1 al 10 sobre qué tan 'vanguardista' o 'relevante' es esto para la escena actual. RESPONDE SIEMPRE EN ESPAÑOL.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING, description: "Un titular artístico y llamativo." },
            analysis: { type: Type.STRING, description: "Un análisis filosófico profundo de 2 frases." },
            recommendation: { type: Type.STRING, description: "Una recomendación creativa para el usuario." },
            score: { type: Type.NUMBER, description: "Un puntaje del 1 al 10." },
          },
          required: ["headline", "analysis", "recommendation", "score"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      headline: "El Silencio Entre Notas",
      analysis: "En una era de saturación digital, las declaraciones musicales más profundas a menudo se encuentran en las pausas deliberadas y las imperfecciones analógicas.",
      recommendation: "Escucha un álbum que ames, pero en vinilo o con los ojos cerrados para redescubrir las texturas.",
      score: 8.5
    };
  }
};
