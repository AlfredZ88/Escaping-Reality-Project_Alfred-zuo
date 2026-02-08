class Scrap{
    constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = 1.2;

    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src", "#scrapMetal");
    this.obj.setAttribute("scale", ".2 .2 .2");
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);
    }


    spin(){
      this.y += this.dy;
      this.obj.setAttribute("rotation", {x:0, y:this.y, z:0});
    }

}