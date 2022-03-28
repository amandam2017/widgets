// reference elements: 
// input field to get the value or the entered sentence
// btn
// and two empty elements to out put the added sentence and to one for the length of the words
const sentenceElem = document.querySelector('.sentence');
const addBtnElem = document.querySelector('.addBtn');
const displaySentenceElem = document.querySelector('.displaySentence');
const wordsLengthElem = document.querySelector('.wordLength');

const checkboxElem = document.getElementById('checkbox');
const shortWordsElem = document.querySelector('.shortWords');
const longwordsElem = document.querySelector('.longwords');

const copysentence = 'Hello there! Do you know Amanda Maarman from Stellenbosch';
const twowords = 'my name is amandamaarman from stellenbosch. My brother name is asandamaarman';

//INSTANTIATE FACTORY
let Factory = Words(); 

const analyze = ()=>{

    let enteredSentence = sentenceElem.value;

    let sentence = enteredSentence.replace(/[,.-]/g, '');

    const words = Factory.showWords(sentence);
    const longest = Factory.LongWord(words);
    console.log(longest);

    displaySentenceElem.innerHTML = "";

    // loop over words 
    // for each word append an element on the dom 
    // use the type attribute to add a class name which will highlight the appropriate words
    words.forEach(word => {

        const wordsElem = document.createElement("span");
        wordsElem.innerHTML = word.word + " ";
        wordsElem.classList.add("word")
        if(word.type.trim()){
            wordsElem.classList.add(word.type);
        }

        displaySentenceElem.appendChild(wordsElem);
        
    });


    wordsLengthElem.innerHTML = `Your sentence have: ${words.length} words.`;

}

const hideAndHighlight =()=>{
    displaySentenceElem.innerHTML = "";
    let enteredSentence = sentenceElem.value;

    const words = Factory.wordsMoreThanFive(enteredSentence);
    console.log(words);
    words.forEach(word => {

        const wordsElem = document.createElement("span");
        wordsElem.innerHTML = word.word + " ";
            if(checkboxElem.checked){
                console.log(checkboxElem.checked, word);
                if(word.type.trim() === 'greaterThanFive'){
                    wordsElem.classList.add(word.type);
                }
            }
            else{
                word += analyze();
            }

        displaySentenceElem.appendChild(wordsElem);
        
    });


}

// add event listener on btn to do something onclick
addBtnElem.addEventListener("click", analyze);
checkboxElem.addEventListener("click", hideAndHighlight);
