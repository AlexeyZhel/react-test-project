import React, {Component} from "react";
import classes from './EditorialChoice.module.scss'

class EditorialChoice extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.EditorialChoice}>
        EditorialChoice
      </div>
    );
  }
}

export default EditorialChoice;
