let rnd = (l,u) => Math.random() * (u-l) + l;
let scene, mainCamera, time, m = 0, s = 0, scrapMetal, sm = 0, totalParts = 0, heart = 5;
let aliens = [], plants=[], rocks=[], scraps = [], plantsModel, plant2Model, collected_parts, Rocket;
let heart1, heart2, heart3, heart4, heart5, cooldown = 100, lightON = false, GameOver, YouWin; // point1, point2, point3;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  GameOver = document.querySelector("#GameOver");
  YouWin = document.querySelector("#YouWin");
  heart1 = document.querySelector("#heart1");
  heart2 = document.querySelector("#heart2");
  heart3 = document.querySelector("#heart3");
  heart4 = document.querySelector("#heart4");
  heart5 = document.querySelector("#heart5");
  Rocket = document.querySelector("#Rocket");
  plantsModel = document.querySelector("#plants");
  plant2Model = document.querySelector("#plant2");
  mainCamera = document.querySelector("#mainCamera");
  time = document.querySelector("#time");
  collected_parts = document.querySelector("#collected_parts");
  scrapMetal = document.querySelector("#scrapMetal");

  for(let i = 0; i < 12; i++){
    let x = rnd(-50,50);
    let z = rnd(-50,50);
    let y = 0;
    let plant = new Plants(x,y,z);
    plants.push(plant);
  }

  // for(let i=0; i<3; i++){
    //let x = rnd(-50,50);
    //let z = rnd(-50,50);
    //let rock = document.createElement("a-gltf-model");
    //rock.setAttribute("src", "#rock");
    //rock.setAttribute("scale", "3 3 3");
    //rock.setAttribute("position", {x:x, y:0, z:z});
    //rocks.push(rock);
    //scene.append(rock);
  //}

  for(let i = 0; i < 4; i++){
    let x = rnd(-20,5);
    let z = rnd(-10,5);
    let alien = new Alien(x,0,z);
    aliens.push(alien);
  }

  for(let i=0; i <15; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let scrap = new Scrap(x, .5, z);
    scraps.push(scrap);
  }


  window.addEventListener("keypress",function(e){
    if(e.key == " "){
      lightON = !lightON;

      if(lightON == true){
      mainCamera.setAttribute("light", {type:"spot", castShadow:true, intensity:3, angle:35, distance:20});
      lightON = true;
    }else{
      mainCamera.setAttribute("light", {type:"spot", castShadow:true, intensity:0});
      lightON = false;
    }
    }
  });


  Rocket.addEventListener("click", ()=>{
    if(totalParts >= 15){
      mainCamera.setAttribute("position", "0 30 0");
      mainCamera.setAttribute("wasd-controls-enabled", "false");
      mainCamera.setAttribute("light", "type:ambient;intensity:1");
      YouWin.setAttribute("visible", "true");
    }
})
  countTime();
  partCount();
  loop();
})

function countTime(){
  time.setAttribute("value", `Time Elapsed: ${m}m: ${s}s`);
  s++;
  if(s > 59){
    s = 0;
    m++;
  }
  setTimeout(countTime,1000);
}

 function partCount(){
  collected_parts.setAttribute("value", `Scrap Metal Collected: ${totalParts} /15`);
}

function loop(){

  if(cooldown > 0){
    cooldown -= 1;
  }

  for(let alien of aliens){
    
    if(distance(mainCamera, alien.obj) < 10 && lightON == true){
    alien.rotateTowards(mainCamera);
    alien.forward();
    }else{
      alien.stop();
      alien.roam();
    }

  

    if(distance(mainCamera, alien.obj)< 2.3 && cooldown == 0){
      heart -= 1;
      cooldown = 100;

    }else if(heart == 4){
      heart5.setAttribute("src", "h_eart.png");
    }else if(heart == 3){
      heart4.setAttribute("src", "h_eart.png");
    }else if(heart == 2){
      heart3.setAttribute("src", "h_eart.png");
    }else if(heart == 1){
      heart2.setAttribute("src", "h_eart.png");
    }else if(heart == 0){
      heart1.setAttribute("src", "h_eart.png");
      mainCamera.setAttribute("position", "0 0.5 -1");
      mainCamera.setAttribute("wasd-controls-enabled", "false");
      alien.stop();
      GameOver.setAttribute("visible", "true");
    }
    
  
  }

  for(let scrap of scraps){
  }

  window.requestAnimationFrame(loop);
}




function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}
