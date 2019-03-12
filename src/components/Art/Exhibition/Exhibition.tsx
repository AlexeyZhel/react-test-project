import React, {Component} from "react";
import classes from './Exhibition.module.scss'

class Exhibition extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.Exhibition}>
        Exhibition
      </div>
    );
  }
}

export default Exhibition;
