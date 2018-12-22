import sceneConf from '../../confs/scene-config'
import {OrthographicCamera} from "../../libs/three";
class Camera{
    constructor(){
        this.instance = null ;
    }

    init(){
        const aspect = window.innerHeight / window.innerWidth;
        //设置正交相机
        this.instance = new OrthographicCamera(-sceneConf.frustumSize,
            sceneConf.frustumSize,
            sceneConf.frustumSize*aspect,
            -sceneConf.frustumSize*aspect,
            -100,85);
        this.instance.position.set(-10,10,10);
        // 需要被看的目标位置
        this.target = new THREE.Vector3(0,0,0);
        // 设置正交相机看的坐标
        this.instance.lookAt(this.target)
    }
}

export default  new Camera()