import  * as  THREE from '../libs/three.js'
// 方便其他地方使用THREE
window.THREE = THREE ;
import game from './game/game.js';

class Main{
    constructor(){

    }
    // 静态调用
    static init(){

        game.init();
    }
}

// Main作为单利
export default Main;

