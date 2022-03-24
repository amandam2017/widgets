const Words = () =>{

    const LongWord =(userSentence)=>{
        let splitSentenct = userSentence.split(" ");
        let longwordOne = '';
        for (let i = 0; i < splitSentenct.length; i++) {
            const element = splitSentenct[i];
            if(element.length>longwordOne.length){
                longwordOne = element;
                console.log(longwordOne);

            }    
        }


        const longword = splitSentenct.filter(word=> word.length === longwordOne.length)
        console.log(longword);

        return longword;

    }


    return{
        LongWord,
        // hideWords,
    }
}