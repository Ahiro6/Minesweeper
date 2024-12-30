import React, { useEffect, useState } from 'react';
import Timer_module from './timer.module.scss';

const Timer = (props: {gameOn: boolean, play:boolean}) => {

    const [sec, setSec] = useState(0)

    useEffect(() => {
        let timer: any
        if(props.gameOn && props.play) {
            timer = setInterval(function () {
                setSec(sec+1);
            }, 1000);
        }
        else if (!props.gameOn && props.play) {
            setSec(0)
        }

        return () => clearInterval(timer)
        
    }, [sec, 
        props.gameOn, props.play])

    return <div className={Timer_module.timer}>
        {sec}
    </div>;
};

export default Timer;
