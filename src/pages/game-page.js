import * as THREE from "../../libs/three";

export default  class GamePage{
    constructor(callbacks){
        this.callbacks = callbacks ;
    }

    init(){
        console.log("game page init");
        var width = window.innerWidth ;
        var height = window.innerHeight ;

        var renderer = new THREE.WebGLRenderer({
            canvas:canvas
        });
        var scene = new THREE.Scene();
        this.scene = scene ;
        var camera = new THREE.OrthographicCamera(-width/2 , width/2 , height / 2 , -height / 2 , -1000, 1000);

        renderer.setClearColor(new THREE.Color(0x000000));
        renderer.setSize(width,height);

        var triangleShape = new THREE.Shape();
        triangleShape.moveTo(0,100);
        triangleShape.lineTo(-100,-100);
        triangleShape.lineTo(100,-100);
        triangleShape.lineTo(0,100);

        var geometry = new THREE.ShapeGeometry(triangleShape);
        var material = new THREE.MeshBasicMaterial({
            color:0xff0000,
            side:THREE.DoubleSide
        });

        var material1 = new THREE.MeshBasicMaterial({
            color:0xffff00,
            side:THREE.DoubleSide
        });

        var mesh = new THREE.Mesh(geometry,material);
        mesh.position.x = 0 ;
        mesh.position.y = 0 ;
        mesh.position.z = 1 ;
        scene.add(mesh);
        this.mesh = mesh ;

        var mesh1 = new THREE.Mesh(geometry,material1);
        mesh1.position.x = 1 ;
        mesh1.position.y = 1 ;
        mesh1.position.z = 0 ;
     //   scene.add(mesh1);

        camera.position.x = 0 ;
        camera.position.y = 0 ;
        camera.position.z = 0 ;
        camera.lookAt(new THREE.Vector3(0,0,1));

        // 添加坐标辅助线
        // red x   green y   blue z
        var axesHelper = new THREE.AxesHelper(100);
        scene.add(axesHelper)

        var currentAngle = 0 ;
        var lastTimestamp = Date.now();

        var animate = function(){
            var now = Date.now();
            var duration = now - lastTimestamp ;
            lastTimestamp = now ;
            currentAngle = currentAngle + duration/1000 * Math.PI;
        }


        var render = function(){
            animate();
            //mesh.rotation.set(x,y,z);  绕着某个坐标转
            mesh.rotation.set(currentAngle,0,0);
            mesh1.rotation.set(0,currentAngle,0);
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }

        render();

        setTimeout(() => {
            this.callbacks.showGameOverPage();
        },2000)
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

}