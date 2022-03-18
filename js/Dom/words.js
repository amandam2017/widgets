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
const longwordsElem = document.querySelector('.longwords');

const copysentence = 'Hello there! Do you know Amanda Maarman from Stellenbosch';

//INSTANTIATE FACTORY
let Factory = Words(); 

const analyze = ()=>{
    
let highlighted = '';

    const userWords = sentenceElem.value;

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

const longest = ()=>{
    const userWords = sentenceElem.value;

    let addedWords = userWords.split(" ");
    let longestword = addedWords[0].length;
    let wordLong = ''

    for (let i = 0; i < addedWords.length; i++) {
        const eachWord = addedWords[i];
        if(eachWord.length>longestword){
            longestword = eachWord.length;
            wordLong  = eachWord;
        }
    }
    console.log(wordLong);
    return wordLong;
}

const longlongestest = ()=>{
    const userWords = sentenceElem.value;

    let addedWords = userWords.split(" ");
    let longestword = addedWords[0].length;
    let lolongest = addedWords[0].length
    let wordLong = ''
    let allAlong = '';

    for (let i = 0; i < addedWords.length; i++) {
        const eachWord = addedWords[i];
        if((eachWord.length>longestword) || (eachWord.length>lolongest)){
            longestword = eachWord.length;
            lolongest = eachWord.length;

            wordLong  = eachWord;
            allAlong = eachWord
        }
    }
    console.log(`${allAlong} ${wordLong}`);

    return `${wordLong} ${allAlong}`;
}

const hideAndHighlight =()=>{

    shortWordsElem.innerHTML = '';
    
    let changeHighlighted = '';
    let highLightLongest = '';
    const userWords = sentenceElem.value;

    // split is to split each word in a sentence and return an array of words
    let addedWords = userWords.split(" ");
    let long = longest();

        for (let i = 0; i < addedWords.length; i++) {
            const wordsToHighlight = addedWords[i];

            if((checkboxElem.checked === true)){
                if((wordsToHighlight.length>5)){
                    changeHighlighted += `<mark style= 'background-color:yellow'>${wordsToHighlight}</mark>`
                }
            }
            else{
                changeHighlighted += wordsToHighlight + " ";
                highLightLongest = " ";
            }

            shortWordsElem.innerHTML = `${changeHighlighted}`
            
    }
    highLightLongest += `<mark style= 'background-color:blue'>${long}</mark>`

    longwordsElem.innerHTML = `the long words are: ${highLightLongest}`;

    
}

// add event listener on btn to do something onclick
addBtnElem.addEventListener('click', analyze);
checkboxElem.addEventListener('click', hideAndHighlight);
