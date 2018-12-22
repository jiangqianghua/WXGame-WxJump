import blockConf from '../../confs/block-config'

export default class BaseBlock{
    constructor(type){
        this.type = type ;
        this.height = blockConf.height;
        this.width = blockConf.width ;
    }
}