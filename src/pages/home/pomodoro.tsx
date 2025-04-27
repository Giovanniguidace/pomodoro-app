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
    const [status, setStatus] = React.useState("");
    const [startTimer, setStartTimer] = React.useState(false);
    const [endTimer, setEndTimer] = React.useState(false);
    const [totalSeconds, setTotalSeconds] = React.useState(5);
    const [completedCycles, setCompletedCycles] = React.useState(0);
    const [fullWorkingTime, setFullWorkingTime] = React.useState(0);
    const [numberOfPomodoros, setNumberOfPomodoros] = React.useState(0);

    /*AJUSTANDO O CLOCK EM RELAÇÃO AO TÉRMINO DO CRONOMETRO*/

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
            setStatus("Trabalhando")
        }
        if(resting){
            document.body.classList.remove('working');
            setStatus("Descansando")
        }

        if(endTimer && totalSeconds == 5){
            setStartTimer(false);
            setCompletedCycles(completedCycles+1);
            setFullWorkingTime(fullWorkingTime+25);
            setTotalSeconds(300);
            setEndTimer(false);
            setStartTimer(true);
        }

        if(endTimer && totalSeconds == 2){
            setStartTimer(false);
            setTotalSeconds(1500);
            setEndTimer(false);
            setStartTimer(true);
        }

    }, [
        working,
        resting
    ]);
    return (
        <div className="pomodoro">
            <Status status={status}></Status>
            <Clock
                startTimer={startTimer}
                setEndTimer={setEndTimer}
                totalSeconds={totalSeconds}
            >
            </Clock>
            <Options configureRest={configureRest} configureWork={configureWork} ></Options>

    </div>)
}