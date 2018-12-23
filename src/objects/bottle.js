import bottleConf from '../../confs/bottle-config'
import blockConf from '../../confs/block-config'
import {customAnimation} from '../../libs/animation'
class Bottle{
    constructor(){

    }

    init(){
        const   {specularMaterial,bottomMaterial,middleMaterial} = this.loadTexture()
        this.obj = new THREE.Object3D(); // 可以放置多个3D物体作为一个整体
        this.obj.name = "bottle";
        this.obj.position.set(bottleConf.initPosition.x, bottleConf.initPosition.y + 30,bottleConf.initPosition.z);

        this.bottle = new THREE.Object3D();
        // var basicMaterial = new THREE.MeshPhongMaterial({
        //     color:0x800080
        // })
        var headRadius = bottleConf.headRadius;
        // 头部是菱形
        this.head = new THREE.Mesh(
            new THREE.OctahedronGeometry(headRadius),
            specularMaterial
        )
        this.head.castShadow = true ;

        var bottom = new THREE.Mesh(
            new THREE.CylinderGeometry(
                0.62857*headRadius,0.907143*headRadius,1.91423*headRadius,20
            ),
            bottomMaterial
        )
        bottom.castShadow = true ;

        var middle = new THREE.Mesh(
            new THREE.CylinderGeometry(
                headRadius/1.4,headRadius/1.4*0.88,headRadius*1.2,20
            ),
            middleMaterial
        )
        middle.castShadow = true ;
        middle.position.y = 1.3857*headRadius;
        middle.position.x = 0;
        middle.position.z = 0;


        var topGeometry = new THREE.SphereGeometry(headRadius/1.4,20,20);
        topGeometry.scale(1,0.54,1); // 把高度缩小，变成椭圆
        var top = new THREE.Mesh(topGeometry,specularMaterial);
        top.position.y = 1.8143*headRadius;
        top.position.x = 0;
        top.position.z = 0;
        top.castShadow = true;

        this.body = new THREE.Object3D();
        this.body.add(bottom);
        this.body.add(middle);
        this.body.add(top)

        this.head.position.y = 3.57143*headRadius ;
        this.head.position.x = 0;
        this.head.position.z = 0;


        this.bottle.add(this.head);
        this.bottle.add(this.body);
        this.obj.add(this.bottle);
        this.instance = this.obj ;

        this.bottle.position.y = 2.2;
        this.bottle.position.x = 0;
        this.bottle.position.z = 0;
    }

    loadTexture(){
        this.loader = new THREE.TextureLoader();
        const specularTexture = this.loader.load('/game/res/images/head.png');
        const specularMaterial = new THREE.MeshBasicMaterial({
            map:specularTexture
        });

        const bottomTexture = this.loader.load('/game/res/images/bottom.png');
        const bottomMaterial = new THREE.MeshBasicMaterial({
            map:bottomTexture
        });

        const middleTexture = this.loader.load('/game/res/images/bottom.png');
        const middleMaterial = new THREE.MeshBasicMaterial({
            map:middleTexture
        });
        return {specularMaterial,bottomMaterial,middleMaterial};
    }

    update(){
        this.head.rotation.y += 0.06;
      //  this.head.rotation.x += 0.06;
       // this.head.rotation.z += 0.06;
    }

    showup () {
        customAnimation.to(this.obj.position, 0.5, { x: bottleConf.initPosition.x, y: bottleConf.initPosition.y + blockConf.height / 2, z: bottleConf.initPosition.z, ease: 'Bounce.easeOut' })
    }
}

export default new Bottle();