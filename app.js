var quoteContainer = document.getElementById('quoteContainer');
var priorQuote = -1; //store the last array index

var generateQuote = function(){
  //generate random number between 0 and quote.length
  var newQuote = Math.floor(Math.random() * quote.length);

  //check to make sure the random number isn't the same as the prior random number
  while(newQuote === priorQuote){
    randNum = Math.floor(Math.random() * quote.length);
  }

  //write quote to the DOM
  quoteContainer.innerHTML = quote[newQuote];
  priorQuote = newQuote;
};

//run script when page loads and when clicking the link for more
generateQuote();
