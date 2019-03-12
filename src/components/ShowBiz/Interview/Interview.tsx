import React, {Component} from "react";
import classes from './Interview.module.scss'

class Interview extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.Interview}>
        Interview
      </div>
    );
  }
}

export default Interview;
