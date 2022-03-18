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
        let longest = '';
        for (let i = 0; i < splitSentenct.length; i++) {
            const element = splitSentenct[i];
            if(element.length>longwordOne.length){
                longwordOne = element;

            }    
        }

        let allwords = [];

        for (let index = 0; index < splitSentenct.length; index++) {
            const element = splitSentenct[index];
            if(element.length>longest.length){
                longest = element;
                // allwords.push(longest);
                // console.log(allwords);
                JSON.stringify(allwords);
            }
            if(longest === element){
                allwords.push(longest)
                console.log(allwords);
            }           
        }

        return allwords;


    }


    return{
        addWords,
        LongWord,
    }
}