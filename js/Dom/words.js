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

let userWords = sentenceElem.value;
let addedWords = userWords.split(" ");
// decupling - Learn to change my array of strings to be an array of objects
const sentence = addedWords.map(word=>{
    return{
        word,
        length: word.length,
        type: word.length >4 ? "greaterThanFour":" "
    }
})

console.log(sentence);

let longest = Factory.LongWord(userWords);

        for (let i = 0; i < sentence.length; i++) {
            let wordCharacter = sentence[i];
            wordCharacter =  wordCharacter.word;
            console.log(wordCharacter)

            if(wordCharacter.length>4){
                if(longest.includes(wordCharacter)){
                    highlighted += `<span class="longest">${wordCharacter}
                    </span>`
                }else{
                    highlighted += `<span class="greaterThanFour">${wordCharacter}</span>`
                }                
            }

            else{
                highlighted += wordCharacter + " ";
            }

            displaySentenceElem.innerHTML = highlighted;
            wordLengthElem.innerHTML = `Your sentence have: ${addedWords.length} words.`;
            
    }

}



const hideAndHighlight =()=>{

    const userWords = sentenceElem.value;
    let addedWords = userWords.split(" ");

let longest = Factory.LongWord(userWords);


    displaySentenceElem.innerHTML = '';
    
    let changeHighlighted = '';

        for (let i = 0; i < addedWords.length; i++) {
            const wordCharacter = addedWords[i];

            if((checkboxElem.checked === true)){
                    if((wordCharacter.length>5)){
                        if(longest.includes(wordCharacter)){
                            changeHighlighted += `<span class="longest">${wordCharacter}</span>`

                        }else{
                        changeHighlighted += `<span class="greaterThanFive">${wordCharacter + " "}</span>`

                        }

                    }
            }
            else{
                changeHighlighted += wordCharacter + " ";
                highLightLongest = " ";
            }

            displaySentenceElem.innerHTML = `${changeHighlighted}`
            
    } 
}

// add event listener on btn to do something onclick
addBtnElem.addEventListener('click', analyze);
checkboxElem.addEventListener('click', hideAndHighlight);
