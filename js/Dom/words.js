// reference elements: 
// input field to get the value or the entered sentence

const sentenceElem = document.querySelector('.sentence');
const addBtnElem = document.querySelector('.addBtn');
const displaySentenceElem = document.querySelector('.displaySentence');

//REFERENCE THE TEMPLATE

//COMPILE THE TEMPLATE

const addSentence = ()=>{
    const userWords = sentenceElem.value;
    if(userWords != ''){
        console.log(userWords);

        displaySentenceElem.innerHTML = userWords;
    
    } 

}

// add event listener on btn to do something onclick
addBtnElem.addEventListener('click', addSentence)