const quote = document.getElementById("quote")
const btn = document.getElementById("roll")
const quoteNumber = document.getElementById("advice-number")
const author = document.getElementById("author")

const quoteAPI = "https://type.fit/api/quotes"


//textContent is faster than innerHTML
//use async await keywords for best practice

async function getQuote(){
    const response = await fetch(quoteAPI)
    const data = await response.json()
   
    //generate random number between min and max number

    function getRandom(min, max){
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let i = getRandom(1, 1643)
    
    //keeps quote in bounds, if quote is too long, gets a new quote

    if(data[i].text.length < 100){
        quote.textContent =   data[i].text 
        quoteNumber.textContent = i
        author.textContent = data[i].author
    }else{
        getQuote()
    }

    

    
}



//generate quote
btn.addEventListener("click", ()=>{
    getQuote()
    btn.classList.add("active")
    setTimeout(()=>{
        btn.classList.remove("active")
    }, 300)
})


//apparently you cant get data outside of async function so you have to do all
//in .then()

