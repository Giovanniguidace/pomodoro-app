import React, {JSX} from 'react';
import {Span} from "../../../components/Span";
import './index.css'

interface Props {
    completedCycles: string;
    fullWorkingTime: string;
    numberOfPomodoros: string;
}

export function Details(props: Props): JSX.Element {
    return (
        <div className={"details"}>
            <Span title={"Ciclos concluidos: "} text={props.completedCycles}></Span>
            <Span title={"Horas Trabalhadas: "} text={props.fullWorkingTime}></Span>
            <Span title={"Pomodoros concluidos: "} text={props.numberOfPomodoros}></Span>
        </div>
    );
}