var myFavoriteNumber = 42;
// this function is called only once
function setup()
{
    createCanvas(800,600);
}
/* this function is called continuously
    while the sketch is open in the browser
*/
function draw()
{
    background(120);
    console.log(myFavoriteNumber);
}