describe("my words widget functions", function(){
    it("should be able to find the longest word", function(){
        const enteredWords = sentence("Please enter a sentence and we will analyze for you.");
        const words = enteredWords.getSentence();
        assert.equal("longest", words[3].type);

    })
    it("should be able to find the longer and longest word", function(){
        
    })
    it("should be able to calculate the length of the words in a sentence", function(){
        
    })

});