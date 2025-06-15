import React, {JSX} from 'react';
import {Button} from "../../../components/Button";
import './index.css'



interface Props {
    configureStartPomodoro?: () => void;
    configurePlayPausePomodoro?: () => void;
    playPausePomodoro: boolean;
    workingPomodoro: boolean;
    restPomodoro: boolean;
}

export function Options(props: Props): JSX.Element {

    return (
        <div className={"options"}>
            {(props.workingPomodoro || props.restPomodoro)
                ?
                <Button
                    text={props.playPausePomodoro ? "Continuar" : "Pausar"} className={"primary"}
                    onClick={props.configurePlayPausePomodoro}></Button>
                :
                <Button text={"Iniciar"} className={"primary"}
                        onClick={props.configureStartPomodoro}></Button>}
        </div>
    )
}