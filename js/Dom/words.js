// reference elements: 
// input field to get the value or the entered sentence
// btn
// and two empty elements to out put the added sentence and to one for the length of the words
const sentenceElem = document.querySelector('.sentence');
const addBtnElem = document.querySelector('.addBtn');
const displaySentenceElem = document.querySelector('.displaySentence');
const wordLengthElem = document.querySelector('.wordLength');

const checkboxElem = document.getElementById('checkbox');
const shortWordsElem = document.querySelector('.shortWords');

const copysentence = 'Hello there! Do you know Amanda Maarman from Stellenbosch';

//INSTANTIATE FACTORY
let Factory = Words(); 

const addSentence = ()=>{
    
let highlighted = '';

    const userWords = sentenceElem.value;

    if(userWords){
        displaySentenceElem.innerHTML = Factory.addWords(userWords);
    }

    // split is to split each word in a sentence and return an array of words
    let addedWords = userWords.split(" ");

        for (let i = 0; i < addedWords.length; i++) {
            const wordsToHighlight = addedWords[i];
            if(userWords){
                shortWordsElem.innerHTML = Factory.addWords(userWords);
            }

            if(wordsToHighlight.length>4){
                highlighted += `<mark style= 'background-color:yellow'>${wordsToHighlight}</mark>`
            }
            else{
                highlighted += wordsToHighlight + " ";
            }

            shortWordsElem.innerHTML = highlighted;
            wordLengthElem.innerHTML = `Your sentence have: ${addedWords.length} words.`;
            
    }

}


const longestWord = ()=>{
    let changeHighlighted = '';
    let longWrd = '';
    const userWords = sentenceElem.value;

    // split is to split each word in a sentence and return an array of words
    let addedWords = userWords.split(" ");
    const longestWord = addedWords.reduce((longestWord, currentWord) =>
    currentWord.length > longestWord.length ? currentWord: longestWord, '');
    console.log(longestWord);
}

const hideAndHighlight =()=>{
    
    let changeHighlighted = '';
    let longestWord = '';
    const userWords = sentenceElem.value;

    // split is to split each word in a sentence and return an array of words
    let addedWords = userWords.split(" ");

        for (let i = 0; i < addedWords.length; i++) {
            const wordsToHighlight = addedWords[i];
            if(userWords){
                shortWordsElem.innerHTML = Factory.addWords(userWords);
            }
            if((checkboxElem.checked === true)){
                if((wordsToHighlight.length>5)){
                    changeHighlighted += `<mark style= 'background-color:yellow'>${wordsToHighlight}</mark>`
                    if((changeHighlighted.length>changeHighlighted))
                    longestWord += `<mark style= 'background-color:blue'>${wordsToHighlight}</mark>`
                }
            }
            else{
                changeHighlighted += " ";
            }

            shortWordsElem.innerHTML = changeHighlighted;
            
    }
    
}

// add event listener on btn to do something onclick
addBtnElem.addEventListener('click', addSentence);
checkboxElem.addEventListener('click', hideAndHighlight);