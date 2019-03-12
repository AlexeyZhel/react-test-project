import React, {Component} from "react";
import classes from './Pokras.module.scss'

class Pokras extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.Pokras}>
        Pokras
      </div>
    );
  }
}

export default Pokras;
