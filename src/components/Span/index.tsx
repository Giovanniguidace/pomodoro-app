import React, {JSX} from 'react';

interface Props {
    title: string;
    text: string;
}

export function Span(props: Props): JSX.Element {
    return (
        <span className={"span"}>{props.title}{props.text}</span>
    )
}