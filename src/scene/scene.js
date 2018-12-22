import camera from './camera'
import * as THREE from "../../libs/three";
import light from "./light";
import background from "../objects/background";
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

        renderer.shadowMap.enabled = true ;
        renderer.shadowMap.type = THREE.PCFShadowMap;

        this.camera = camera ;
        this.camera.init();
        this.light = light;
        this.light.init();

        // 添加坐标辅助线
        // red x   green y   blue z
        this.axesHelper = new THREE.AxesHelper(100);
        this.instance.add(this.axesHelper);
        this.instance.add(this.camera.instance);
        for(let lightType in this.light.instance){
            this.instance.add(this.light.instance[lightType]);
        }

        this.background = background ;
        this.background.init();
        this.background.instance.position.z = -84;
        this.camera.instance.add(this.background.instance);
    }


    render(){
        this.renderer.render(this.instance,this.camera.instance);
    }
}

export  default  new Scene();