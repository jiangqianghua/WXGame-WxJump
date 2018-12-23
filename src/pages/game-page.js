import * as THREE from "../../libs/three";
import scene from '../scene/scene'
import Cuboid from "../block/cuboid";
import CylinderBlock from "../block/cylinder";
import ground from "../objects/ground";
import bottle from "../objects/bottle";

export default  class GamePage{
    constructor(callbacks){
        this.callbacks = callbacks ;
    }

    init(){
       this.scene = scene ;
       this.ground = ground;
       this.bottle = bottle;
       this.scene.init();
       this.ground.init();
       this.bottle.init();
       this.addInitBlock();
       this.addGround();
       this.addBottle();
       this.bindTouchEvent();
       this.render();
    }

    /**
     * 绑定触摸事件
     */
    bindTouchEvent(){
        canvas.addEventListener('touchstart',this.touchStartCallback);
        canvas.addEventListener('touchend',this.touchEndCallback);
    }

    removeTouchEvent(){
        canvas.removeEventListener('touchstart',this.touchStartCallback);
        canvas.removeEventListener('touchend',this.touchEndCallback);
    }

    touchStartCallback(){
        console.log('touch event start');
    }

    touchEndCallback(){
        console.log('touch event end');
    }



    render(){
        this.scene.render();
        if(this.bottle ){
            this.bottle.update();
        }
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

    addGround(){
        this.scene.instance.add(this.ground.instance);
    }

    addBottle(){
        this.scene.instance.add(this.bottle.instance);
        this.bottle.showup();
    }

}