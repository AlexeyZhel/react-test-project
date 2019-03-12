import React, {FunctionComponent} from 'react';
import classes from './Button.module.scss'
import {ButtonType, IButtonProps} from './Button.interface';
import ArrowForwardIcon from '-!svg-react-loader?name=ArrowForwardIcon!../../../assets/icons/right-arrow-forward.svg';

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
    default:
      button = (<button
        className={classNames}>
        {props.text}
      </button>);
  }
  return button;
};
