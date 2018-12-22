import GamePage from '../pages/game-page'
import GameOverPage from '../pages/game-over-page'

class GameView{
    constructor(){

    }
    showGameOverPage(){
        this.gamePage.hiden();
        this.gameOverPage.show();
    }

    showGamePage(){
        this.gameOverPage.hiden();
        this.gamePage.restart();
        this.gamePage.show();
    }

    restartGame(){
        this.gamePage.restart();
    }

    initGameOverPage(callbacks){
        this.gameOverPage = new GameOverPage(callbacks);
        this.gameOverPage.init({
            scene: this.gamePage.scene
        });
    }

    initGamePage(callback){
        this.gamePage = new GamePage(callback);
        this.gamePage.init();
    }
}

export  default  new GameView();