import React, {JSX} from 'react'
import './index.css'

interface Props {
    status: string
}

export function Status(props: Props): JSX.Element {
    return <div className="status">Você está: {props.status}</div>
}