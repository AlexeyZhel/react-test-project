import React, {Component} from "react";
import classes from './SummerColor.module.scss'

class SummerColor extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.SummerColor}>
        SummerColor
      </div>
    );
  }
}

export default SummerColor;
