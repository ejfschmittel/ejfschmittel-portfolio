import * as PIXI from "pixi.js"


let warpSpeed = .3;

export const speedUp = () => {
    warpSpeed = 1;
}

export const slowDown = () => {
    warpSpeed = .3;
}


export const initStarBackground = (canvas) => {

const app = new PIXI.Application({
    view: canvas,
    resizeTo: document.getElementById("section-hero")
});




// Get the texture for rope.
const starTexture = PIXI.Texture.from('./star.png');


console.log(app.renderer.width)

//app.stage.hitArea = new PIXI.Rectangle(0, 0, app.renderer.width, app.renderer.height);




const starAmount = 200;
const asteroidAmount = 20;
let cameraZ = 0;
const fov = 10;
const baseSpeed = 0.01;
let speed = 0;
const starStretch = 10;
const starBaseSize = 0.05;

const asteroidBaseSize = 2;
const asteroidStrech = 0;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '0x';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Create the stars
const stars = [];
for (let i = 0; i < starAmount; i++) {
    const star = {
        sprite: new PIXI.Sprite(starTexture),
        z: 0,
        x: 0,
        y: 0,

    };

    star.sprite.anchor.x = 0.5;
    star.sprite.anchor.y = 0.7;
    star.sprite.tint = getRandomColor();
    randomizeStar(star, true);
    app.stage.addChild(star.sprite);
    stars.push(star);
}


const explosions = []


const explosionParticleCount = 50;





const createExplosion = (astroid) => {
    // hide asteroid


    const z = astroid.z - cameraZ;
    const x = astroid.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
    const y = astroid.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

    console.log(z,x,y)

    const particle = {sprite: new PIXI.Sprite(starTexture), z: z, x: x, y: y, lifetime: 1000}
    console.log(astroid)
    console.log(particle)
    app.stage.addChild(particle.sprite)

    console.log(particle.sprite.x)

    particle.sprite.tint = 0xffffff;

    explosions.push(particle)

 

    

    /*astroid.sprite.renderable = false;

    // push to explosions
    const explosion = []
    for(let i = 0; i < 1; i++){
        // create explotion particle
        const particle = {
            ...astroid,
            lifetime: 1000,
            sprite: new PIXI.Sprite(starTexture)
          
        }
        console.log(particle)
        particle.sprite.anchor.x = 0.5;
        particle.sprite.anchor.y = 0.7;
        particle.sprite.tint = 0x00ff00;
        particle.renderable = true;
        app.stage.addChild(particle.sprite);
        console.log(app.stage.children)
        //randomizeParticle(particle)
        explosion.push(particle);
    }
    explosions.push(explosion)

    console.log(explosions)*/
}

const randomizeParticle = (particle) => {
    const deg = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 1;
    particle.x = Math.cos(deg) * distance;
    particle.y = Math.sin(deg) * distance;
    particle.lifetime = Math.random() * 500 + 500;
}


app.stage.interactive = true;
// create asteroids
const astroids = [];
for (let i = 0; i < asteroidAmount; i++) {
    const astroid = {
        sprite: new PIXI.Sprite(starTexture),
        z: 0,
        x: 0,
        y: 0,
    };

    astroid.sprite.anchor.x = 0.5;
    astroid.sprite.anchor.y = 0.7;
    astroid.sprite.tint = 0xff0000;
    randomizeStar(astroid, true);
    app.stage.addChild(astroid.sprite);
    astroids.push(astroid);
    console.log(astroid.sprite.height)

    //astroid.sprite.hitArea = new PIXI.Rectangle(0,0,astroid.sprite.width, astroid.sprite.height)
    astroid.sprite.interactive = true;
    astroid.sprite.on("pointerover", () => {
        const body = document.querySelector("body");
        body.style.cursor = "crosshair";
    })

    astroid.sprite.on("pointerout", () => {
        const body = document.querySelector("body");
        body.style.cursor = "auto";
    })

    astroid.sprite.on("pointerdown", () => {
        // explode
       

        // create explosion
        createExplosion(astroid)
    })
}




function randomizeStar(star, initial) {
    star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;

    // Calculate star positions with radial random coordinate so no star hits the camera.
    const deg = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 1;
    star.x = Math.cos(deg) * distance;
    star.y = Math.sin(deg) * distance;
}

// Change flight speed every 5 seconds


// Listen for animate update
app.ticker.add((delta) => {

    // Simple easing. This should be changed to proper easing function when used for real.
    speed += (warpSpeed - speed) / 20;
    cameraZ += delta * 10 * (speed + baseSpeed);
    for (let i = 0; i < starAmount; i++) {
        

        const star = stars[i];
        if(i == 0){
            console.log(star)
        }
        if (star.z < cameraZ) randomizeStar(star);

        // Map star 3d position to 2d with really simple projection
        const z = star.z - cameraZ;
        star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
        star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

        // Calculate star scale & rotation.
        const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
        const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
        const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
        const distanceScale = Math.max(0, (2000 - z) / 2000);
        star.sprite.scale.x = distanceScale * starBaseSize;
        // Star is looking towards center so that y axis is towards center.
        // Scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.
        star.sprite.scale.y = distanceScale * starBaseSize + distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;
        star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
    }

    // update asteroids
    for (let i = 0; i < asteroidAmount; i++) {
        const astroid = astroids[i];
        if (astroid.z < cameraZ) {
            randomizeStar(astroid);
            astroid.sprite.renderable = true;
        }

        // Map star 3d position to 2d with really simple projection
        const z = astroid.z - cameraZ;
        astroid.sprite.x = astroid.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
        astroid.sprite.y = astroid.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

        // Calculate star scale & rotation.
        const dxCenter = astroid.sprite.x - app.renderer.screen.width / 2;
        const dyCenter = astroid.sprite.y - app.renderer.screen.height / 2;
        const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
        const distanceScale = Math.max(0, (2000 - z) / 2000);
        astroid.sprite.scale.x = distanceScale * asteroidBaseSize;
        // Star is looking towards center so that y axis is towards center.
        // Scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.
        astroid.sprite.scale.y = distanceScale * asteroidBaseSize + distanceScale * speed * asteroidStrech * distanceCenter / app.renderer.screen.width;
        astroid.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
    }

    /*for (let i = 0; i < explosions.length; i++) {
        const explosion = explosions[i];
      
        const z = explosion.z - cameraZ;
        explosion.sprite.x = explosion.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
        explosion.sprite.y = explosion.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

        const dxCenter = explosion.sprite.x - app.renderer.screen.width / 2;
        const dyCenter = explosion.sprite.y - app.renderer.screen.height / 2;
        const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
        const distanceScale = Math.max(0, (2000 - z) / 2000);
        explosion.sprite.scale.x = distanceScale * asteroidBaseSize;
        // Star is looking towards center so that y axis is towards center.
        // Scale the star depending on how fast we are moving, what the stretchfactor is and depending on how far away it is from the center.
        explosion.sprite.scale.y = distanceScale * asteroidBaseSize + distanceScale * speed * asteroidStrech * distanceCenter / app.renderer.screen.width;
        explosion.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
    }*/

    // update explosions
   /* for(let i = 0; i < explosions.length; i++){
        const explosion = explosions[i]
        for(let j = 0; j < explosion.length; j++){
            const particle = explosion[j]

            console.log(particle)

            const z = explosion.z - cameraZ;
            particle.sprite.x = particle.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
            particle.sprite.y = particle.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

            
            // Calculate star scale & rotation.

            particle.sprite.scale.set(20)

     

        }
    }*/

});

}
