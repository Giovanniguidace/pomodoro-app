import React, {JSX} from "react";
import './index.css'

interface Props {
    timer: string;
}

export function Clock(props: Props): JSX.Element {
    return (
        <div className="clock">Tempo restante: {props.timer}</div>
    )
}