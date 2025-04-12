import React, {JSX} from "react";
import './pomodoro.css'
import {Clock} from "./clock";
import {Status} from "./status";

interface Props{

}

export function Pomodoro(props: Props): JSX.Element {
    return (<div className="pomodoroBase">
        <Status status={"Trabalhando"}></Status>
        <Clock timer={"25:00"}></Clock>
    </div>)
}