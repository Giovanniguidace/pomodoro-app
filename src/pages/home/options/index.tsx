import React, {JSX, useCallback, useEffect} from 'react';
import {Button} from "../../../components/Button";
import './index.css'



interface Props {
    configureStartPomodoro?: () => void;
}

function configureWork(): void{

}

function configureRest(): void{

}

function configurePlayPause(): void{

}

export function Options(props: Props): JSX.Element {

    return (
        <div className={"options"}>
            <Button text={"Iniciar"} className={"primary"} onClick={props.configureStartPomodoro}></Button>
            <Button text={"Pausar"} className={"primary"} onClick={() => configurePlayPause()}></Button>
        </div>

    )
}