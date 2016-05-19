var quoteContainer = document.getElementById('quoteContainer');

var generateQuote = function(){
  //generate random number between 0 and quote.length
  var randNum = Math.floor(Math.random() * quote.length);
  console.log(randNum);

  //check to make sure the random number isn't the same as the prior random number

  //write quote[random number] to the DOM
  quoteContainer.innerHTML = quote[randNum];
};

//run script when page loads and when clicking the link for more
generateQuote();

// for(var i=0; i<quote.length; i++){
//   console.log(quote[i]);
// }
