import gameModel from 'model'
import gameView from 'view'

class GameController{
    constructor(){
        // 将model和view挂在在controller上
        this.gameModel = gameModel ;
        this.gameView = gameView ;

        this.gameModel.stateChanged.attach((sender,args) =>{
            const stageName = args.stage ;
            switch(stageName){
                case 'game-over':
                    this.gameView.showGameOverPage()
                    break;
                case 'game':
                    this.gameView.showGamePage
                    break;
            }
        })
    }


    /**
     * 初始化界面
     */
    initPages(){
        const gamePageCallbacks = {
            showGameOverPage:()=> {
                this.gameModel.setState('game-over')
            }
        }

        const gameOverPageCallBacks = () => {
            this.gameModel.setState('game')
        }
        this.gameView.initGamePage(gamePageCallbacks);
        this.gameView.initGameOverPage(gameOverPageCallBacks);
    }
}

export default  new GameController();