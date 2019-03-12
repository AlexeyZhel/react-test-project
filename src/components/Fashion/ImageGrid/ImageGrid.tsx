import React, {Component} from "react";
import classes from './ImageGrid.module.scss'

class ImageGrid extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.ImageGrid}>
        ImageGrid
      </div>
    );
  }
}

export default ImageGrid;
