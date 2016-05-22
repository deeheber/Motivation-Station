var quoteContainer = document.getElementById('quoteContainer');
var moreLink = document.getElementById('more');
var priorQuote = -1; //initalize prior quote value

var generateQuote = function(event){
  //for the moreLink
  event.preventDefault();

  //generate random number between 0 and quote.length
  var newQuote = Math.floor(Math.random() * quote.length);

  //prevents the same quote from coming in twice in a row
  while(newQuote === priorQuote){
    newQuote = Math.floor(Math.random() * quote.length);
  }

  //write quote to the DOM
  quoteContainer.innerHTML = quote[newQuote];
  priorQuote = newQuote;
};

//run script when page loads and when clicking the link for more
window.addEventListener('load', generateQuote);
moreLink.addEventListener('click', generateQuote);
