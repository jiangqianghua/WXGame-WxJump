import camera from './camera'
import * as THREE from "../../libs/three";
class  Scene{
    constructor(){
        this.instance = null ;
    }

    init(){
        this.instance = new THREE.Scene;
        const renderer = this.renderer = new THREE.WebGLRenderer({
            canvas:canvas,
            antialias:true, //抗锯齿
            preserveDrawingBuffer:true
        });

        this.camera = camera ;
        this.camera.init();

        // 添加坐标辅助线
        // red x   green y   blue z
        this.axesHelper = new THREE.AxesHelper(100);
        this.instance.add(this.axesHelper);
        this.instance.add(this.camera.instance);
    }


    render(){
        this.renderer.render(this.instance,this.camera.instance);
    }
}

export  default  new Scene();