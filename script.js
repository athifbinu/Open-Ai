let prompt =document.getElementById("prompt")
let ask =document.getElementById("ask")
let results =document.getElementById('results')



ask.addEventListener("click",()=>{
    let qustion =prompt.value;
    let responceDiv =document.createElement("div")

    responsediv.classList.add("response");
    let qustion_text= `<p>${qustion}</p>`
    responceDiv.innerHTML+=qustion_text;
    responceDiv.innerHTML+='<p>Thinking...</p>'


    results.appendChild(responceDiv);
})