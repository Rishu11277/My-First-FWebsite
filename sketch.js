var box;







function setup() {
  createCanvas(2000,2000);
  box = createSprite(1000, 1000, 200, 200)
}

function draw() 
{
  background(30)
  box.x = World.mouseX
  box.y = World.mouseY
drawSprites()
}




