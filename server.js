const express =require('express');
require("dotenv").config();
const cors =require('cors')

const bodyparser =require("body-parser")
const {Configuration,OpenAIApi} =require("openai")

//middlewere
const app =express();
app.use(cors());
app.use(bodyparser.json())

//configuration at api
const configuration =new Configuration({
    apiKey:process.env.OPENAI_API_KEY
})

//create new opject at openaiapi
const openai =new OpenAIApi(Configuration)
