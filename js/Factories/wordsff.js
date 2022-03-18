const Words = () =>{

    const addWords = (userSentence)=>{
 
        if(userSentence != ''){
            console.log(userSentence);

            return userSentence;
        
        }
        
    }

    const LongWord =(userSentence)=>{
        let splitSentenct = userSentence.split(" ");
        let longWord = splitSentenct[0].length;
        let longwordOne = '';
        for (let i = 0; i < splitSentenct.length; i++) {
            const element = splitSentenct[i];
            if(element.length>longWord){
                longWord = element.length;
                longwordOne = element;

            }    
        }
        return longwordOne;
    }


    return{
        addWords,
        LongWord,
    }
}