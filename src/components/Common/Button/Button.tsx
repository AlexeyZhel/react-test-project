import React, {FunctionComponent} from 'react';
import classes from './Button.module.scss'
import {ButtonType, IButtonProps} from './Button.interface';
import ArrowForwardIcon from '-!svg-react-loader?name=ArrowForwardIcon!../../../assets/icons/right-arrow-forward.svg';
import PlayIcon from '-!svg-react-loader?name=ArrowForwardIcon!../../../assets/icons/play-button.svg';

export const Button: FunctionComponent<IButtonProps> = (props) => {
    const classNames = [
        classes.Button,
        classes[props.btnType ? props.btnType : ButtonType.Text],
        props.className,
    ].join(' ');
    let button;

    switch (props.btnType) {
        case ButtonType.Arrow:
            button = (<button
                className={classNames}>
                <ArrowForwardIcon/>
            </button>);
            break;
        case ButtonType.TextWithArrow:
            button = (<button
                className={classNames}>
                <div className={classes.ArrowWithTextContent}>
                    <div>
                        {props.text}
                    </div>
                    <div>
                        <PlayIcon/>
                    </div>
                </div>
            </button>);
            break;
        default:
            button = (<button
                className={classNames}>
                {props.text}
            </button>);
    }
    return button;
};
