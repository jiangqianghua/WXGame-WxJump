import gameModel from 'model'
import gameView from 'game'

class GameController{
    constructor(){
        // 将model和view挂在在controller上
        this.gameModel = gameModel ;
        this.gameView = gameView ;
    }

    /**
     * 使用箭头函数，方便里面this指向GameController对象
     */
    showGameOver = () => {
        this.gameView.showGameOver();
    }

    /**
     * 重启游戏
     */
    restartGame = () => {
        this.gameView.restartGame();
    }

    /**
     * 初始化界面
     */
    initPages(){
        const gamePageCallbacks = {
            showGameOverPage:this.showGameOver
        }

        const gameOverPageCallBacks = {
            gameRestart: this.restartGame
        }
        this.gameView.initGamePage(gamePageCallbacks);
        this.gameView.initGameOverPage(gameOverPageCallBacks);
    }
}