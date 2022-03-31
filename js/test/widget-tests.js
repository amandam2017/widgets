describe("my words widget functions", function(){
    it("should be able to display the sentence", function(){

        const Factory = Words('Please enter a sentence');
        const words = Factory.showWords();
  
        // assert.deepEqual(['Please', 'enter', 'a', 'sentence', 'and', 'we', 'will', 'analyze', 'for', 'you'], words);
  
        assert.deepEqual('Please', words[0].word);
        assert.deepEqual('enter', words[1].word);
        assert.deepEqual('a', words[2].word);
        assert.deepEqual('sentence', words[3].word);

    })
    it("should be able to find the word/s greater than four in a sentence", function(){

        const Factory = Words('Please enter a sentence and we will analyze for you');
        const words = Factory.showWords();

        // assert.equal(3, words.length);

        assert.equal('Please', words[0].word); 
        assert.equal('enter', words[1].word); 
        assert.equal('sentence', words[3].word); 
        assert.equal('analyze', words[7].word);      
        
    })
    it("should be able to find longest words in a sentence", function(){
        const Factory = Words('Please enter a sentence and we will analyze for you');
        const longWords = Factory.LongWord();

        // assert.deepEqual("longest", words[3].words.type);
        
        assert.equal("longest", longWords[3].type);

        
    })
    it("should be able to find all words with characters more than five", function(){
        const Factory = Words('Please enter a sentence and we will analyze for you');
        const words = Factory.showWords();

        assert.equal("Please", words[0].word);  
        assert.equal("sentence", words[3].word); 
        assert.equal("analyze", words[7].word); 
        
    })
    it("should be able to find all words with characters more than five", function(){
        const Factory = Words('Please enter a sentence and we will analyze for you');
        const words = Factory.wordsMoreThanFive();

        assert.equal('greaterThanFive', words[0].type);  
        assert.equal('greaterThanFive', words[3].type); 
        assert.equal('greaterThanFive', words[7].type); 
        
    })
    it("should be able to calculate the length of the words in a sentence", function(){
        const Factory = Words('Please enter a sentence and we will analyze for you sentence');
        const words = Factory.showWords();
  
        assert.equal(11, words.length);
        
    })

});