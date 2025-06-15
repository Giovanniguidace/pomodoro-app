import React, {JSX} from 'react';
import {Span} from "../../../components/Span";
import './index.css'

interface Props {
    completedCycles: number;
    fullWorkingTime: number;
    numberOfPomodoros: number;
}

export function Details(props: Props): JSX.Element {
    return (
        <div className={"details"}>
            <Span title={"Ciclos concluidos: "} text={props.completedCycles.toString()}></Span>
            <Span title={"Horas Trabalhadas: "} text={props.fullWorkingTime.toFixed(2)}></Span>
            <Span title={"Pomodoros concluidos: "} text={props.numberOfPomodoros.toString()}></Span>
        </div>
    );
}