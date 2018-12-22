class Light{
    constructor(){
        this.instance = {};
    }

    init(){
        // 环境光
        const ambientLight = new THREE.AmbientLight(0xffffff,0.8);
        // 平行光
        const shadowLight = new THREE.DirectionalLight(0xffffff,0.3);
        shadowLight.castShadow = true ; // 支持投影
        var basicMaterial = new THREE.MeshBasicMaterial({color:"0xf5f5f5"});
        this.shadowTarget = new THREE.Mesh(new THREE.PlaneGeometry(5,5,5,5));
        this.shadowTarget.visible = true ;
        this.shadowTarget.name = "shadowTarget";
        this.shadowTarget.position.set(20,-50,30);
        shadowLight.target = this.shadowTarget ;

        // 设置阴影
        shadowLight.shadow.camera.near = 0.5 ;
        shadowLight.shadow.camera.far = 500 ;
        shadowLight.shadow.camera.left = -100 ;
        shadowLight.shadow.camera.right = 100 ;
        shadowLight.shadow.camera.top = 100 ;
        shadowLight.shadow.camera.bottom = -100 ;
        shadowLight.shadow.mapSize.width = 1024;
        shadowLight.shadow.mapSize.height = 1024;

        this.instance.ambientLight = ambientLight;
        this.instance.shadowLight = shadowLight ;
        this.instance.shadowTarget = this.shadowTarget ;
    }
}

export default new Light();