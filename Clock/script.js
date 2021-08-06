let para = document.querySelector('.quote-para')
let quote = 
[
  '" The Greatest Glory Living Lies Not In Fever Falling, But In Rising Everytime We Fall. " -Nelson Mandela',

   '" The Way To Get Started Is To quit Talking And Begin Doing. " -Walt Disney',

   '" If Life Were Predictable It Would Cease To Be Life, And Be Without Flavor " -Eleanor Roosevelt',
   //	'" Life Is What Happens When Your Busy Making Other Plans. "',
   '"Knowledge Is Wealth"',
   '"If you set your goals ridiculously high and its a failure, you will fail above everyone else success." -James Cameron',
   '"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',
   '"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt',
   '"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead',
   '"Dont judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson',
   '"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',
   '"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin',
];

setInterval(
function myFunction() {
	var randomquote = quote[Math.floor(Math.random() * quote.length)]
	para.innerHTML = randomquote;
}, 20000);


//                             TIME SECTION

function timeFunction() {
var min = new Date();
var hour = min.getHours();
var mins = min.getMinutes();
var secs = min.getSeconds();
var session = "AM"

if (hour == 0){
	hour = 12
}
if (hour > 12){
	session = "PM";
	hour = hour - 12;
}
// if (hour == "2" && mins == "01")
// {
// 	sesion = "PM"
// }
if (hour < 10) {
	hour = "0" + hour;
}
if (mins < 10) {
	mins = "0" + mins;
}if (secs < 10) {
	secs = "0" + secs;
}
var time = hour + ":"+ mins + ":" + secs;

// var func = {
// hour = (hour < 10) ? "0" + hour : hour
// mins = (mins < 10) ? "0" + mins : mins
// secs = (secs < 10) ? "0" + secs : secs
// }
document.querySelector('.sectime').innerHTML = time;
document.querySelector('.sessiontime').innerHTML = session
//console.log(time)

}
//timeFunction()
timeFunction()
setInterval(timeFunction, 1000);
//                              DATE,MONTH AND YEAR SECTION



var con = new Date();
var day = con.getDay()
if (day == 1)
{
	day = "Monday"
}
if (day == 2)
{
	day = "Tuesday"
}
if (day == 3)
{
	day = "Wednesday"
}
if (day == 4)
{
	day = "Thursday"
}
if (day == 5)
{
	day = "Friday"
}
if (day == 6)
{
	day = "Saturday"
}
if (day == 7)
{
	day = "Sunday"
}
console.log(day)

//                    Month

var mnt = con.getMonth();
if (mnt == 0){
	mnt = "January"
}

if (mnt == 1){
	mnt = "febraury"
}

if (mnt == 2){
	mnt = "March"
}

if (mnt == 3){
	mnt = "April"
}

if (mnt == 4){
	mnt = "May"
}

if (mnt == 5){
	mnt = "June"
}

if (mnt == 6){
	mnt = "July"
}

if (mnt == 7){
	mnt = "August"
}

if (mnt == 8){
	mnt = "September"
}

if (mnt == 9){
	mnt = "October"
}

if (mnt == 10){
	mnt = "November"
}

if (mnt == 11){
	mnt = "December"
}


var date = con.getDate();
if ((date == 1)||(date == 21)||(date == 31)){
	date = date + "st"
}
if ((date == 2)||(date == 22)) {
	date = date + "nd"
}
if ((date == 3)||(date == 23)) {
	date = date + "rd"
}
else
{
	date = date + "th"
}

var daytime = date + "," + "&nbsp" + mnt + "," + "&nbsp" + con.getFullYear()
document.querySelector('.daytime').innerHTML =  daytime;
// 0 - jan
// 1 - feb
// 2 - march
// 3 - april
// 4 - may
// 5 - june
// 6 - july
// 7 - august
// 8 - sept 
// 9 - oct
// 10 - nov
// 11 - dec
//var pr = document.querySelector('.parent')
