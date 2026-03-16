class Alien{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.speed = 0.025;
        this.charge = "mixamo.com";

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
      let dx = this.speed * Math.sin(this.angle);
      let dz = this.speed * Math.cos(this.angle);
      this.obj.object3D.position.x += dx;
      this.obj.object3D.position.z += dz; 
      this.obj.setAttribute("animation-mixer",{clip:this.charge, timeScale:1});
  }
  stop(){
    this.obj.setAttribute("animation-mixer",{timeScale:0});
  }
  // All FROM FNAF GAME - End
  
     roam(){
        let point1 = document.querySelector("#point1");
        let point2 = document.querySelector("#point2");
        let point3 = document.querySelector("#point3");
        let point4 = document.querySelector("#point4");
        let point5 = document.querySelector("#point5");
        let point6 = document.querySelector("#point6");

        let points = [point1, point2, point3, point4, point5, point6];
        
        if(Math.random() < 0.0055){
            this.target = points[Math.floor(Math.random() * points.length)];
        }
        
        if(this.target){
        this.rotateTowards(this.target);
        this.forward();
        }

    }
}
