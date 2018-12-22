import Event from "../utils/event";

class GameModel{

    constructor(){
        this.stage = '';
        this.stateChanged = new Event(this)
    }

    getState(){
        return this.stage ;
    }

    setState(state){
        this.stage = state ;
        this.stateChanged.notify({
            stage:state
        })
    }
}

export default new GameModel();