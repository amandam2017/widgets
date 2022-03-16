// reference elements: 
// input field to get the value or the entered sentence
// btn
// and two empty elements to out put the added sentence and to one for the length of the words
const sentenceElem = document.querySelector('.sentence');
const addBtnElem = document.querySelector('.addBtn');
const displaySentenceElem = document.querySelector('.displaySentence');
const wordLengthElem = document.querySelector('.wordLength');
const shortWordsElem = document.querySelector('.shortWords');

const copysentence = 'Hello there! Do you know Amanda Maarman from Stellenbosch';

//INSTANTIATE FACTORY
let Factory = Words(); 

const addSentence = (option)=>{
    
    const userWords = sentenceElem.value;
    if(userWords){
        displaySentenceElem.innerHTML = Factory.addWords(userWords);
    }

    // split is to split each word in a sentence and return an array of words
    let addedWords = userWords.split(" ");

        let highlighted = '';
        let hiddenW = '';


        for (let i = 0; i < addedWords.length; i++) {
            const wordsToHighlight = addedWords[i];
            // tryimg to hide less than 5 words
            if(option === 'less'){
                return 
            }
            if(wordsToHighlight.length>4){
                highlighted += `<mark style= 'background-color:yellow'>${wordsToHighlight}</mark>`

            }
            else{
                highlighted += wordsToHighlight;
            }

            displaySentenceElem.innerHTML = highlighted;
            wordLengthElem.innerHTML = `Your sentence have: ${addedWords.length} words.`;
            
    }

}

// add event listener on btn to do something onclick
addBtnElem.addEventListener('click', addSentence);
// shortWordsElem.addEventListener('click', hide);