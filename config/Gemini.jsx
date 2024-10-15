import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

// Access the API key from environment variables using Vite's syntax
const apiKey = 'AIzaSyBF7snmmyu2Uyunn9k4JXBeyKlhNekWnNg' 

if (!apiKey) {
  console.error("API Key is missing. Please check your .env file.");
}// Use import.meta.env to access the API key
console.log("Using API Key:", apiKey); // Debugging line


const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(Prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(Prompt);
const response=result.response;

  // const response=result.response
  console.log(result.response.text());

  return response.text

}

export default run;

