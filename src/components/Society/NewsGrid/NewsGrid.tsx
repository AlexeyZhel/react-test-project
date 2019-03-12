import React, {Component} from "react";
import classes from './NewsGrid.module.scss'

class NewsGrid extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.NewsGrid}>
        NewsGrid
      </div>
    );
  }
}

export default NewsGrid;
