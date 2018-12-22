import gameController from 'controller'

class Game{
    constructor(){
        this.gameController = gameController ;
    }

    init(){
        gameController.initPages();
    }
}

export default new Game();