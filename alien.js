class Alien {
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dz = .01;

        this.obj = document.createElement("a-gltf-model");
        this.obj.setAttribute("src","#alien");
        this.obj.setAttribute("animation-mixer","");
        this.obj.setAttribute("scale", "2 2 2")
        this.obj.setAttribute("position",{x:x,y:0,z:z});
        // this.obj.setAttribute("rotation", "0 180 0")
        scene.append(this.obj);
    }
    // All FROM FNAF GAME - Start
    angleTo(that){
      let dx = that.object3D.position.x - this.obj.object3D.position.x;
      let dz = that.object3D.position.z - this.obj.object3D.position.z;

      this.angle = Math.atan(dx/dz)
      if(dz < 0){
          this.angle += Math.PI
      }
  }
  rotateTowards(that){
      this.angleTo(that);
      this.obj.object3D.rotation.y = this.angle;
  }
  forward(){
      let dx = this.model.speed * Math.sin(this.angle);
      let dz = this.model.speed * Math.cos(this.angle);
      this.obj.object3D.position.x += dx;
      this.obj.object3D.position.z += dz; 
      this.obj.setAttribute("animation-mixer",{clip:this.model.charge, timeScale:0.75});
  }
  stop(){
    this.obj.setAttribute("animation-mixer",{timeScale:0});
  }
  // All FROM FNAF GAME - End
  
    // roam(){
        // this.z += this.dz;
        // this.obj.setAttribute("position", {x:this.x, y:0, z:this.z})
        // if(distance(this.obj, document.querySelector("#AlienHouses")) > 15){
            //this.obj.setAttribute("rotation", "0 180 0");
            //this.dz = -this.dz;
        //}
    //}
}
