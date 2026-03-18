class Scrap{
    constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = .7;

    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src", "#scrapMetal");
    this.obj.setAttribute("scale", ".2 .2 .2");
    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append(this.obj);
    
    this.obj.addEventListener("click", ()=>{
      if(distance(mainCamera, this.obj) < 2.7){
        totalParts += 15;
        this.obj.setAttribute("position", "0 -10 0")
        partCount();
      }
    });
  }



    spin(){
      this.x += this.dx;
      this.wrap.setAttribute("rotation", {x:this.dx, y:0, z:0});
    }

}