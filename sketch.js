
var canvas
var backgroundImage, jewelsImage, sharkImage, playerImage, seaweedImage
var score = 0
var diamond = []





function preload() {
backgroundImage = loadImage("background.jpeg")
jewelsImage = loadImage("Diamond.png")
seaweedImage = loadImage("SeaWeed.jpeg")
sharkImage = loadImage("2014470.png")
playerImage = loadImage("Diver-Vector-PNG.png")
}


function setup() {
canvas = createCanvas(windowWidth,windowHeight)

SharkGroup = new Group()


ocean = createSprite(windowWidth/2, windowHeight/2)
ocean.addImage(backgroundImage)
ocean.scale = 2
ocean.setVelocity(-2,0)


Diver = createSprite(350,windowHeight-250)
Diver.addImage(playerImage)


}


function draw() {
background(backgroundImage)
console.log(ocean.position.x)
if(ocean.position.x<0){
    ocean.position.x = windowWidth/2
}
if(keyDown(UP_ARROW)){
    Diver.position.y = Diver.position.y-3.5
}

if(keyDown(DOWN_ARROW)){
    Diver.position.y = Diver.position.y+3.5
}
spawnJewels()
spawnSharks()

if(SharkGroup.isTouching(Diver)){
    score = score-1
}

for(i=0 ; i<diamond.length ; i++){
  if(Diver.isTouching(diamond[i])){
score = score+5
diamond[i].destroy()
  }
}


drawSprites()
textSize(40)
text("Score: "+score,50,50)




}

function spawnJewels(){
    if(frameCount%200===0){
        Jewels = createSprite(1200,700)
        Jewels.addImage(jewelsImage)
        Jewels.scale = 0.01
        Jewels.setVelocity(-2,0)
        diamond.push(Jewels)
    }

}

function spawnSharks(){
    if(frameCount%780===0){
Shark = createSprite(windowWidth,700)
Shark.addImage(sharkImage)
Shark.scale = 0.75
Shark.setVelocity(-2,0)
Shark.position.y = Math.round(random(400,700))
SharkGroup.add(Shark)
    }
}

