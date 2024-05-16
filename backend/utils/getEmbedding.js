const dotenv = require("dotenv");
const path = require('path');
const {OpenAI} = require('openai');

//environment variables
dotenv.config({path: path.join(__dirname, '../../.env')});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const getEmbedding = async(text, model = 'text-embedding-ada-002') => {

  //replace newlines with space
  const cleanedText = text.replace(/\n/g, ' ');

  //create embedding using OPENAI API
  const response = await openai.embeddings.create({
    model: model,
    input: cleanedText
  });

  return response.data[0].embedding;

}
module.exports = getEmbedding;
