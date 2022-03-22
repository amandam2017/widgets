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
const twowords = 'my name is amandamaarman from stellenbosch. My brother name is asandamaarman';

//INSTANTIATE FACTORY
let Factory = Words(); 

const analyze = ()=>{
    
let highlighted = '';
let highLightLongest = '';
// let long = longest();

const userWords = sentenceElem.value;
let addedWords = userWords.split(" ");

let long = Factory.LongWord(userWords);

    // decoupled word logic words
    const wordList = addedWords.map(word=>{
        return{
            word,
            length: word.length,
            type: word.length>4 ? "longer": ""
        }
    })

        for (let i = 0; i < wordList.length; i++) {
            let wordsToHighlight = wordList[i];
            wordsToHighlight =  wordsToHighlight.word;
            console.log(wordsToHighlight);


            if(wordsToHighlight.length>4){
                highlighted +=  `<span class="greaterThanFour">${wordsToHighlight + " "}</span>`
                
            }

            else{
                highlighted += wordsToHighlight + " ";
            }

            shortWordsElem.innerHTML = highlighted;
            wordLengthElem.innerHTML = `Your sentence have: ${wordList.length} words.`;
            
    }

    highLightLongest += `<span class="longest">${long}</span>`
    longwordsElem.innerHTML = `the long words are: ${highLightLongest}`;

}



const hideAndHighlight =()=>{
    const userWords = sentenceElem.value;
    let addedWords = userWords.split(" ");

    shortWordsElem.innerHTML = '';
    
    let changeHighlighted = '';

        for (let i = 0; i < addedWords.length; i++) {
            const wordsToHighlight = addedWords[i];

            if((checkboxElem.checked === true)){
                    if((wordsToHighlight.length>5)){
                        changeHighlighted += `<span class="greaterThanFive">${wordsToHighlight + " "}</span>`
                    }
            }
            else{
                changeHighlighted += wordsToHighlight + " ";
                highLightLongest = " ";
            }

            shortWordsElem.innerHTML = `${changeHighlighted}`
            
    }    
}

// add event listener on btn to do something onclick
addBtnElem.addEventListener('click', analyze);
checkboxElem.addEventListener('click', hideAndHighlight);
