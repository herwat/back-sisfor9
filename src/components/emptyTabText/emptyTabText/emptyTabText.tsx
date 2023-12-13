import React from 'react';
import "./emptyTabText.css"

interface NotifTextProps {
    boldText: string;
    normalText1: string;
    normalText2: string;
}

const EmptyTabText: React.FC<NotifTextProps> = (props) => {
    return (
        <div>
            <h6 id='bold'>{props.boldText}</h6>
            <p id='normal'>{props.normalText1}</p>
            <p id='normal'>{props.normalText2}</p>
        </div>
    );
};
export default EmptyTabText;