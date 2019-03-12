import React, {Component} from "react";
import classes from './Header.module.scss'
import {Button, ButtonType} from "../Common/Button";

class Header extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.Header}>
        <nav className={classes.NavBar}>
          <a href="#0">Шоубиз</a>
          <a href="#0">Искусство</a>
          <a href="#0">Красота</a>
          <a href="#0">Общество</a>
        </nav>
        <Button btnType={ButtonType.Arrow}/>
      </div>
    );
  }
}

export default Header;
