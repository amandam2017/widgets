const Words = () =>{

    const showWords = (words)=>{  
        
        // let sentence = getWords(userWords);
        let sentence = words.split(" ");
        // console.log(sentence);
        
        // decupling - Learn to change my array of strings to be an array of objects
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
                    // console.log(wordCharacter)
        
                    if(wordCharacter.length>sentenceWords.length){
                        sentenceWords = wordCharacter;
                    }
                    
                }

                return decoupledSentence;
        
        }

    const LongWord =(words)=>{
        let longwordOne = '';
        for (let i = 0; i < words.length; i++) {
            const eachWord = words[i];
            if(eachWord.length>longwordOne.length){
                longwordOne = eachWord.word;
            }    
        }

        // const longword = words.filter(word=> word.length === longwordOne.length)

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

    }


    return{
        LongWord,
        showWords,
    }
}