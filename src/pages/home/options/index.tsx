import React, {JSX, useCallback, useEffect} from 'react';
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
            {(props.workingPomodoro || props.restPomodoro) ? <></> : <Button text={"Iniciar"} className={"primary"} onClick={props.configureStartPomodoro}></Button>}
            <Button text={props.playPausePomodoro ? "Reiniciar" : "Pausar"} className={"primary"} onClick={props.configurePlayPausePomodoro}></Button>
        </div>

    )
}