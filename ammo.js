class Ammo{
      constructor(x,y,z){
    this.z = 0;
    this.dz = 1;
    this.obj = document.createElement("a-entity");
  
    let box = document.createElement("a-box"); 
    box.setAttribute("color", "#06402B");
    box.setAttribute("src", "bullets.webp");
    this.obj.append(box);
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
  spin(){
    this.z += this.dz;
    this.obj.setAttribute("rotation", {x:90, y:90, z:this.z});
  }
}