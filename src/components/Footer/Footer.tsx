import React, {Component} from "react";
import classes from './Footer.module.scss'

class Footer extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.Footer}>
        Footer
      </div>
    );
  }
}

export default Footer;
