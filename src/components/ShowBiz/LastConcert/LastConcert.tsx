import React, {Component} from "react";
import classes from './LastConcert.module.scss'

class LastConcert extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.LastConcert}>
        LastConcert
      </div>
    );
  }
}

export default LastConcert;
