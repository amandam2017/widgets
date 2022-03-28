const Words = () =>{

    const showWords = (words)=>{  
        
        // let sentence = getWords(userWords);
        let sentence = words.split(" ");
        console.log(sentence);
        
        // decupling - Learn to change my words of strings to be an words of objects
        const decoupledSentence = sentence.map(word=>{
            return{
                word,
                length: word.length,
                type: word.length >4 ? "greaterThanFour":" ",

            }
        })
        
        // console.log(decoupledSentence);
 
            let sentenceWords = '';

                for (let i = 0; i < decoupledSentence.length; i++) {
                    let wordCharacter = decoupledSentence[i];
                    wordCharacter =  wordCharacter.word;
        
                    if(wordCharacter.length>sentenceWords.length){
                        sentenceWords = wordCharacter;
                    }
                    
                }

                return decoupledSentence;
        
        }

    const LongWord =(words)=>{
        // let longwordOne = '';
        // for (let i = 0; i < words.length; i++) {
        //     const eachWord = words[i];
        //     if(eachWord.length>longwordOne.length){
        //         longwordOne = eachWord.word;
        //     }    
        // }

        let longestWord = {
            length: 0
        }
        // console.log(longwordOne);

        words.forEach((wordOne, index) => {
            if(wordOne.length>longestWord.length){
                longestWord = {
                    length: wordOne.length,
                    index
                }
            }
        });

        words[longestWord.index].type = "longest";

        const longwords = words.filter(word=> word.length === longestWord.length);
        console.log(longwords);

        longwords.forEach(word => word.type = "longest");

    }

    const wordsMoreThanFive = (words)=>{  
        
        // let sentence = getWords(userWords);
        let sentence = words.split(" ");
        console.log(sentence);
        
        // decupling - Learn to change my words of strings to be an words of objects
        const decoupledSentence = sentence.map(word=>{
            return{
                word,
                length: word.length,
                type: word.length >5 ? "greaterThanFive":" ",

            }
        })
 
            let sentenceWords = '';

                for (let i = 0; i < decoupledSentence.length; i++) {
                    let wordCharacter = decoupledSentence[i];
                    wordCharacter =  wordCharacter.word;
        
                    if(wordCharacter.length>sentenceWords.length){
                        sentenceWords = wordCharacter;
                    }
                    
                }

                return decoupledSentence;
        
        }


    return{
        LongWord,
        showWords,
        wordsMoreThanFive,
        // highlighting,
    }
}