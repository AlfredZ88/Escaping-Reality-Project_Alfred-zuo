let rnd = (l,u) => Math.random() * (u-l) + l;
let scene, mainCamera, time, m = 0, s = 0, scrapMetal, sm = 0, totalParts = 0;
let aliens = [], plants=[], rocks=[], scraps = [], plantsModel, plant2Model, collected_parts;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
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
    let z = rnd(-3,5);
    let alien = new Alien(x,0,z);
    aliens.push(alien);
  }

  for(let i=0; i <10; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let scrap = new Scrap(x, .5, z);
    scraps.push(scrap);
  }


  window.addEventListener("keypress",function(e){
    if(e.key == " "){
      mainCamera.setAttribute("light","type:point;castShadow:true;intensity:10;");
    }else if(e.key == "q"){
      mainCamera.setAttribute("light", "type:point;castShadow:true;intensity:0;");
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
  for(let alien of aliens){
    //if(distance(aliens.obj, mainCamera) < 5){
    alien.rotateTowards(mainCamera);
    //alien.forward();
  //}
  }

  for(let scrap of scraps){
    scrap.spin();

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