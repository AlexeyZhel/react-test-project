import React, {Component} from "react";
import classes from './MasterClass.module.scss'

class MasterClass extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.MasterClass}>
        MasterClass
      </div>
    );
  }
}

export default MasterClass;
