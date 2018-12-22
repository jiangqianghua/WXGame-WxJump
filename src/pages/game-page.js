import * as THREE from "../../libs/three";
import scene from '../scene/scene'
import Cuboid from "../block/cuboid";
import CylinderBlock from "../block/cylinder";

export default  class GamePage{
    constructor(callbacks){
        this.callbacks = callbacks ;
    }

    init(){
       this.scene = scene ;
       this.scene.init();
       this.addInitBlock();
       this.render();
    }

    render(){
        this.scene.render();
        requestAnimationFrame(this.render.bind(this))
    }

    restart(){
        console.log("game page restart");
    }

    show(){
        console.log("game  page show");
        this.mesh.visible = true ;
    }

    hiden(){
        console.log("game  page hiden");
        this.mesh.visible = false ;
    }

    addInitBlock(){
        const cuboidBlock = new Cuboid(-15,0,0);
        const cylinderBlock = new CylinderBlock(23,0,0);
        this.scene.instance.add(cuboidBlock.instance);
        this.scene.instance.add(cylinderBlock.instance);
    }

}