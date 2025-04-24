import React, {JSX, useCallback, useEffect} from "react";
import './pomodoro.css'
import {Clock} from "./clock";
import {Status} from "./status";
import {Options} from "./options";
import {Details} from "./details";

interface Props{

}

export function Pomodoro(props: Props): JSX.Element {
    const [working, setWorking] = React.useState(false);
    const [resting, setResting] = React.useState(false);
    const [startTimer, setStartTimer] = React.useState(false);

    const configureWork = useCallback(() => {
            setWorking(true);
            setResting(false);
        setStartTimer(true);
        }, [
        setWorking,
        setResting,
            setStartTimer
        ]
    );

    const configureRest = useCallback(() => {
            setWorking(false);
            setResting(true);
            setStartTimer(false);
        }, [
        setWorking,
        setResting,
        setStartTimer
        ]
    );

    useEffect(() => {
        if(working){
            document.body.classList.add('working');

        }
        if(resting) document.body.classList.remove('working');
    }, [
        working,
        resting
    ]);
    return (
        <div className="pomodoro">
            <Status status={"Trabalhando"}></Status>
            <Clock startTimer={startTimer}></Clock>
            <Options configureRest={configureRest} configureWork={configureWork} ></Options>
            <Details completedCycles={"4"} fullWorkingTime={"10"} numberOfPomodoros={"10"} ></Details>
    </div>)
}