const Words = () =>{

    const addWords = (userSentence)=>{
 
        if(userSentence != ''){
            console.log(userSentence);

            return userSentence;
        
        }
        
    }

    const LongWord =(userSentence)=>{
        let splitSentenct = userSentence.split(" ");
        let longwordOne = '';
        let longestWords = '';
        for (let i = 0; i < splitSentenct.length; i++) {
            const element = splitSentenct[i];
            if(element.length>longwordOne.length){
                longwordOne = element;
                console.log(longwordOne);

            }    
        }

        const sameLengthWords = splitSentenct.filter(word=> word.length === longwordOne.length)
        console.log(sameLengthWords);

        return sameLengthWords;


    // push long word into an array
    // get the long word in a factory function

    }


    return{
        addWords,
        LongWord,
    }
}