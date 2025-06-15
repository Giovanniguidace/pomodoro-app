import React, {JSX, useCallback, useEffect} from "react";
import './pomodoro.css'
import {Clock} from "./clock";
import {Status} from "./status";
import {Options} from "./options";
import {Details} from "./details";

interface Props{

}

export function Pomodoro(props: Props): JSX.Element {
    const [playPausePomodoro, setPlayPausePomodoro] = React.useState(false);
    const [working, setWorking] = React.useState(false);
    const [resting, setResting] = React.useState(false);
    const [status, setStatus] = React.useState("");
    const [startTimer, setStartTimer] = React.useState(false);
    const [endTimer, setEndTimer] = React.useState(false);
    const secondsWorking = 11;
    const secondsResting = 11;
    const [totalSeconds, setTotalSeconds] = React.useState(secondsWorking);
    const [completedCycles, setCompletedCycles] = React.useState(0);
    const [fullWorkingTime, setFullWorkingTime] = React.useState(0);
    const [numberOfPomodoros, setNumberOfPomodoros] = React.useState(0);

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
            configureClock(secondsWorking);
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
            configureClock(secondsResting);
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
            configureClock(secondsWorking);
        }
        }, [
            setStatus,
            setResting,
            setWorking,
            configureClock
        ]
    );

    const addCompletedCycles = useCallback(() => {
        if(completedCycles === 4){
            setNumberOfPomodoros(prev => prev + 1);
            setCompletedCycles(0);
        }else{
            setCompletedCycles(prev => prev + 1);
        }
        setFullWorkingTime(number => ((number + secondsWorking + secondsResting) / 60))
    }, [
        completedCycles,
        setCompletedCycles,
        setNumberOfPomodoros,
        setFullWorkingTime,
    ])

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
        playPausePomodoro
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
                resting={resting}
                addCompletedCycles={addCompletedCycles}
            >
            </Clock>
            <Options
                configureStartPomodoro={configureStartPomodoro}
                configurePlayPausePomodoro={configurePlayPausePomodoro}
                playPausePomodoro={playPausePomodoro}
                restPomodoro={resting}
                workingPomodoro={working}
            >
            </Options>
            <Details
                completedCycles={completedCycles}
                fullWorkingTime={fullWorkingTime}
                numberOfPomodoros={numberOfPomodoros}
            >
            </Details>
    </div>)
}