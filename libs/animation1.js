import Tween1 from './tween1'
const customAnimation = exports.customAnimation = {
        to: function ( from,duration, to, type) {
        for (let prop in from) {
            TweenAnimation(from[prop], to[prop], duration, type, (value)=>{
                from[prop] = value
            });
        }
    }
}

const TweenAnimation = exports.TweenAnimation = function TweenAnimation(from , to , duration , type, callback){
    const frameCount = duration * 1000 / 7;
    let start = -1;
    const startTime = Date.now();
    let lastTime = Date.now();

    const options = {
        callback: function(){},
        type:'Linear',
        duration:300
    }

    if(callback){
        options.callback = callback ;
    }

    if(duration){
        options.duration = duration ;
    }

    if(type){
        options.type = type ;
    }

    const step = function(){
        const currentTime = Date.now();
        const interval = currentTime - lastTime ;

        if(interval <= 17){
            start++;
        }else{
            // 计算需要多少帧
            const _start = Math.floor(interval/17);
            start = start + _start ;
        }

        const value = Tween1.Linear(start,from,to-from,frameCount);
        if(start <= frameCount){
            options.callback(value);
            console.log(value);
            requestAnimationFrame(step);
        }else{
            // 动画结束
            options.callback(to,true); // 传true标示动画结束
        }
       // requestAnimationFrame(step);

    }
    step(frameCount);
}
