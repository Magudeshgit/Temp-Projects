let quotesrc = document.querySelector('.quote')
let quote = 
[
  '" The Greatest Glory Living Lies Not In Fever Falling, But In Rising Everytime We Fall. " -Nelson Mandela',

   '" The Way To Get Started Is To quit Talking And Begin Doing.  -Walt Disney',

   ' If Life Were Predictable It Would Cease To Be Life, And Be Without Flavor  -Eleanor Roosevelt',
   'Knowledge Is Wealth',
   'If you set your goals ridiculously high and its a failure, you will fail above everyone else success." -James Cameron',
   'Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa',
   'When you reach the end of your rope, tie a knot in it and hang on. -Franklin D. Roosevelt',
   'Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead',
   'Dont judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson',
   'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
   'Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin',

];

function myFunction() {
	var randomquote = quote[Math.floor(Math.random() * quote.length)]
	quotesrc.innerHTML = randomquote;
}
myFunction()
setInterval(myFunction, 20000)

