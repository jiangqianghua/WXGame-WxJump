
const Tween1 = {
    Linear: function Linear(currentFrame,from, range, totalFrameCount){
        return range*currentFrame/totalFrameCount + from;
    }
}

export default Tween1