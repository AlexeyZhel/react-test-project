import React, {FunctionComponent} from 'react';
import classes from './SideTitle.module.scss'
import {ISideTitleProps} from './SideTitle.interface';

export const SideTitle: FunctionComponent<ISideTitleProps> = (props) => {
    const classNames = [
        classes.SideTitle,
        props.className,
    ].join(' ');

    const lineHeightStyle= {
        width: `${props.lineWidth}px`
    };

    return (<div className={classNames}>
        <div className={classes.RotatedTextContainer}>
            <div className={classes.RotatedText}>
                {props.title}
            </div>
        </div>
        <div className={classes.LineContainer}>
            <div className={classes.Line} style={lineHeightStyle}></div>
        </div>
    </div>);
};