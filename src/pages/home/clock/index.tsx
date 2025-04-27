import React, {JSX, use, useCallback, useEffect} from "react";
import './index.css'

interface Props {
    startTimer: boolean;
    totalSeconds: number;
    setEndTimer: any;
}

export function Clock(props: Props): JSX.Element {
    const [count, setCount] = React.useState(props.totalSeconds);
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


    useEffect(() => {
        pomodoroTimer(count);
        if(props.startTimer){
            const intervalId = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        }
        if(count === 0){
            props.setEndTimer(true);
        }
    }, [props.startTimer, count, pomodoroTimer, props.setEndTimer]);

    return (
        <>
            <div className={"clock"}>{timer}</div>
        </>
    )
}