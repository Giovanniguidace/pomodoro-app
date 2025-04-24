import React, {JSX, use, useEffect} from "react";
import './index.css'

interface Props {
    startTimer: boolean;
}

export function Clock(props: Props): JSX.Element {
    const pomodoroMinutestoSeconds: number = 90000;
    const [count, setCount] = React.useState(pomodoroMinutestoSeconds);

    useEffect(() => {
        console.log("Aqui: " + props.startTimer);
        if(props.startTimer){
            const intervalId = setInterval(() => {
                setCount((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [props.startTimer]);

    return (
        <div className={"clock"}>{count}</div>
    )
}