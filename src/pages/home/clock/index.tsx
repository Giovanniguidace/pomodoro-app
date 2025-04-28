import React, {JSX, use, useCallback, useEffect} from "react";
import './index.css'

interface Props {
    startTimer: boolean;
    setStartTimer: (timer: boolean) => void;
    totalSeconds: number;
    setEndTimer: (timer: boolean) => void;
}

export function Clock(props: Props): JSX.Element {
    const [count, setCount] = React.useState(0);
    const [timer, setTimer] = React.useState("00:00");

    const pomodoroTimer = useCallback((count: number) => {
        var minutes = Math.floor(count / 60);
        var divisor_for_seconds = count % 60;
        var seconds = Math.ceil(divisor_for_seconds);
        if(seconds === 0){
            setTimer(`${minutes}:${seconds}0`);
            return;
        }
        if(minutes === 0){
            setTimer(`${minutes}0:${seconds}`);
            return;
        }
        if(seconds === 0 && minutes === 0){
            setTimer(`${minutes}0:${seconds}0`);
            return;
        }
        setTimer(`${minutes}:${seconds}`);
    }, [])

    const configureCount = useCallback(() => {
        setCount(props.totalSeconds);
    },[
        setCount,
        props.totalSeconds,
    ]);


    useEffect(() => {
        if(!props.startTimer){
            configureCount();
        }

        if(props.startTimer){
            pomodoroTimer(count);
            const intervalId = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);
            if(count === 0){
                props.setStartTimer(false);
                props.setEndTimer(true);
            }
            return () => clearInterval(intervalId);
        }
    }, [props.startTimer, count, pomodoroTimer, props.setEndTimer, props.setStartTimer]);

    return (
        <>
            <div className={"clock"}>{timer}</div>
        </>
    )
}