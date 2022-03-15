// reference elements: 
// input field to get the value or the entered sentence
const sentenceElem = document.querySelector('.sentence');
const addBtnElem = document.querySelector('.addBtn');
const displaySentenceElem = document.querySelector('.displaySentence');
const wordLengthElem = document.querySelector('.wordLength');

const copysentence = 'Hello there! Do you know Amanda Maarman from Stellenbosch';

//INSTANTIATE FACTORY
let Factory = Words(); 

const addSentence = ()=>{
    
    const userWords = sentenceElem.value;
    if(userWords){
        displaySentenceElem.innerHTML = Factory.addWords(userWords);
    }

    let addedWords = userWords.split(" ");

    let highlighted = '';
        for (let i = 0; i < addedWords.length; i++) {
            const wordsToHighlight = addedWords[i];
            if(wordsToHighlight.length>4){
                highlighted += `<mark style= 'color:yellow'>${wordsToHighlight}</mark>`

            }else{
                highlighted += wordsToHighlight;
            }

            displaySentenceElem.innerHTML = highlighted;
            wordLengthElem.innerHTML = addedWords.length;
            
    }

}

// add event listener on btn to do something onclick
addBtnElem.addEventListener('click', addSentence);