const express =require('express');
require("dotenv").config();
const cors =require('cors')

const bodyparser =require("body-parser")
const {Configuration,OpenAIApi} =require("openai");


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


app.post('/ask',async(req,res)=>{
      const prompt =req.body.prompt;

      if(!prompt){
        return res.status(400).send({error:"prompt is requred"})
      }
      try{
        //model  =to the model of an text
        //temperature =expext 0 to one value
    await  openai.createCompletion({
            model:'text-davinci-003',
            prompt:prompt,
            temperature:5,
            max_tokens:3000
         }).then((response)=>{    
            //open ai are return correct answer 
            response.send({data:response.data.choices[0].text})
         })
      }
      catch(err){
        console.log(err);
        res.status(500).send({err})
      }
})


app.listen(3000,()=>{
  console.log("server started")
})