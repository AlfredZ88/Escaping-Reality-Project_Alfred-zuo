class Plants{
    constructor(x,y,z){
    this.x = x;
    this.z = z;
    this.y = y;
    
    this.obj = document.createElement("a-gltf-model");
    this.obj.setAttribute("src", "#plants");
    this.obj.setAttribute("scale", ".2 .2 .2");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);  
    
}
}