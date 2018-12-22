import BaseBlock from './base'

// 长方体
export default  class CylinderBlock extends BaseBlock{
    constructor(x,y,z,width){
        super('cuboid')
        const size = width || this.width;
        //  120 标示由120个三角形组成圆柱
        const geometry = new THREE.CylinderGeometry(size/2,size/2,this.height,120);
        const material = new THREE.MeshBasicMaterial({
            color:0xffffff
        });
        this.instance = new THREE.Mesh(geometry,material);
        this.instance.name = 'block';
        this.x = x ;
        this.y = y ;
        this.z = z ;
        this.instance.position.x = this.x ;
        this.instance.position.y = this.y ;
        this.instance.position.z = this.z ;
    }
}