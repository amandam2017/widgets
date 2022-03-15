const Words = () =>{
    // const addedWords = [];

    const addWords = (userSentence)=>{
        const addedWords = [];


        if(userSentence != ''){
            console.log(userSentence);

            const splittedArray = userSentence.split(" ");

            addedWords.push(splittedArray);
            console.log(addedWords);

            return userSentence;
        
        }
        
    }

    // const longerWords = () =>{
    //     let highlighted = '';
    //     for (let i = 0; i < addedWords; i++) {
    //         const wordsToHighlight = addedWords[i];
    //         if(wordsToHighlight.length>4){
    //             highlighted += `<mark>${wordsToHighlight}</mark>`
    //             // console.log(wordsToHighlight.length>4);
    //             // return wordsToHighlight;
    //         }else{
    //             highlighted += wordsToHighlight;
    //         }
            
    //     }
    // }

    return{
        addWords,
        // longerWords,
    }
}