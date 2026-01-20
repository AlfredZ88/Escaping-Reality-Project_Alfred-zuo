let rnd = (l,u) => Math.random() * (u-l) + l;
let scene;
let aliens = [], plants=[], plantsModel;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  plantsModel = document.querySelector("#plants");

  for(let i = 0; i < 20; i++){
    let x = rnd(-50,50);
    let z = rnd(-50,50);
    let y = 0;
    let plant = new Plants(x,y,z);
    plants.push(plant);
  }

  for(let i = 0; i < 4; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    let alien = document.createElement("a-gltf-model");
    alien.setAttribute("src","#alien");
    alien.setAttribute("animation-mixer","");
    alien.setAttribute("scale", "2 2 2")
    alien.setAttribute("position",{x:x,y:0,z:z});
    // person.addEventListener("click",function(){
      // this.setAttribute("scale","0 0 0");
    // })
    aliens.push(alien);
    scene.append(alien);
  }
  
  loop();
})

function loop(){
  for(let alien of aliens){
    
  }
  window.requestAnimationFrame(loop);
}