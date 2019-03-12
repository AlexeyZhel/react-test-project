import React, {Component} from "react";
import classes from './MainNews.module.scss'

class MainNews extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.MainNews}>
        MainNews
      </div>
    );
  }
}

export default MainNews;
