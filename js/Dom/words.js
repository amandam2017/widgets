// reference elements: 
// input field to get the value or the entered sentence
const sentenceElem = document.querySelector('.sentence');
const addBtnElem = document.querySelector('.addBtn');
const displaySentenceElem = document.querySelector('.displaySentence');

const copysentence = 'Hello there! Do you know Amanda Maarman from Stellenbosch';


//REFERENCE THE TEMPLATE

//COMPILE THE TEMPLATE

//INSTANTIATE FACTORY
let Factory = Words(); 

const addSentence = ()=>{
    var addedSentences = [];
    
    const userWords = sentenceElem.value;
    if(userWords){
        displaySentenceElem.innerHTML = Factory.addWords(userWords);
        console.log(displaySentenceElem.innerHTML);

        addedSentences.push(displaySentenceElem.innerHTML);
        addedSentences = displaySentenceElem.innerHTML.split();

        console.log(addedSentences = displaySentenceElem.innerHTML.split());

    
    } 

}

// add event listener on btn to do something onclick
addBtnElem.addEventListener('click', addSentence);