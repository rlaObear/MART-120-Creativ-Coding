var x = 0;
function setup()
{
    createCanvas(600,800);
}
function draw()
{
    var i = 0;
    while(i < 5)
    {
        textSize(28);
        text(i,x,100);
        x+=100;
        i++;
    }
    x = 0;
}