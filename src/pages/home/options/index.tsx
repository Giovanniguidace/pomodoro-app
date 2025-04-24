import React, {JSX, useCallback, useEffect} from 'react';
import {Button} from "../../../components/Button";
import './index.css'



interface Props {
    configureWork?: () => void;
    configureRest?: () => void;
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
            <Button text={"Trabalhar"} className={"primary"} onClick={props.configureWork}></Button>
            <Button text={"Descansar"} className={"primary"} onClick={props.configureRest}></Button>
            <Button text={"Pausar"} className={"primary"} onClick={() => configurePlayPause()}></Button>
        </div>

    )
}