import React, {JSX, useCallback, useEffect} from "react";
import './pomodoro.css'
import {Clock} from "./clock";
import {Status} from "./status";
import {Options} from "./options";
import {Details} from "./details";

interface Props{

}

export function Pomodoro(props: Props): JSX.Element {
    const [startPomodoro, setStartPomodoro] = React.useState(false);
    const [playPausePomodoro, setPlayPausePomodoro] = React.useState(false);
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

    const configureClock = useCallback((seconds: number) => {
        setEndTimer(false);
        setTotalSeconds(seconds);
        setStartTimer(true);
    },[
        setStartTimer,
        setEndTimer,
        setTotalSeconds,
    ])

    const configureStartPomodoro = useCallback(() => {
            setWorking(true);
            setResting(false);
            document.body.classList.add('working');
            setStatus("Trabalhando")
            configureClock(5);
        }, [
            setWorking,
            setResting,
            configureClock,
        ]
    );

    const configurePlayPausePomodoro = useCallback(() => {
        if(playPausePomodoro){
            setPlayPausePomodoro(false);
        }else{
            setPlayPausePomodoro(true);
        }
    }, [
        setPlayPausePomodoro,
        playPausePomodoro
    ])

    const configureRest = useCallback((endTimer: boolean) => {
        if(endTimer){
            document.body.classList.remove('working');
            setStatus("Descansando")
            setResting(true);
            setWorking(false);
            configureClock(5);
        }
    }, [
        setStatus,
        setResting,
        setWorking,
        configureClock
    ])

    const configureWork = useCallback((endTimer: boolean) => {
        if(endTimer) {
            document.body.classList.add('working');
            setStatus("Trabalhando")
            setWorking(true);
            setResting(false);
            configureClock(5);
        }
        }, [
            setStatus,
            setResting,
            setWorking,
            configureClock
        ]
    );

    useEffect(() => {
       if(working){
            configureRest(endTimer);
           console.log("Working");
        }

        if(resting){
            console.log("Resting");
            configureWork(endTimer);
        }

    }, [
        working,
        resting,
        endTimer,
        configureRest,
        configureWork,
        playPausePomodoro,
    ]);
    return (
        <div className="pomodoro">
            <Status status={status}></Status>
            <Clock
                startTimer={startTimer}
                setStartTimer={setStartTimer}
                setEndTimer={setEndTimer}
                totalSeconds={totalSeconds}
                playPausePomodoro={playPausePomodoro}
            >
            </Clock>
            <Options configureStartPomodoro={configureStartPomodoro} configurePlayPausePomodoro={configurePlayPausePomodoro} playPausePomodoro={playPausePomodoro}></Options>
    </div>)
}