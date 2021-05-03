document.addEventListener("DOMContentLoaded", () =>{
    myButts()

})


let submit = $("#submit")
let display = $('.question') 
let answer = $('#answer')
let abc = $('#abc')
let dollar = $(".money")
let val = $("#val")
let clear = $("#cleary")

cleary.addEventListener("click",deleteItems)



function myButts(){
    let myButts = $('.button1')
    console.log(myButts)
    for (let i = 0; i < myButts.length; i++){
        myButts[i].addEventListener("click",runME)
        
        
        
    }
    
}

let count = 0;
const storedCount = localStorage.getItem('count');

if (storedCount !== null) {
    count = parseInt(storedCount);
}
function runME(event){
    let i = Math.floor(Math.random() *QUESTIONS.length)
    let question = QUESTIONS[i];
    console.log(question)
    let money = ""
    let buttonVal = event.target.value
    while(question.value !== buttonVal){
        let random = Math.floor(Math.random()*QUESTIONS.length)
        question = QUESTIONS[random]
        money =  question.value.slice(1)
        
    }
    display.text(question.question)
    val.text(money)
    abc.text(question.answer)
}


submit.click(function () {
    const ans = answer.val() 
    console.log("button clicked")
    if(answer === abc){
        console.log("you did it")
    }
    if(abc.text() === ans ) {
        alert("you're right!")
        count += Number(val.text())
        localStorage.setItem('count', count);
        document.querySelector('.money').innerText = "$"+ count ;
    }
    
    
});
document.querySelector('.money').innerText = "$"+ count ;

function deleteItems() {
    localStorage.clear(count);
    document.querySelector('.money').innerText = "$"+ 0 ;
}