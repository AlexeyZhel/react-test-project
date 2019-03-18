import React, {Component} from "react";
import classes from './ShowBiz.module.scss'
import Interview from "./Interview/Interview";
import LastConcert from "./LastConcert/LastConcert";
import EditorChoice from "./EditorChoice/EditorChoice";

class ShowBiz extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.ShowBiz} id='showbiz'>
        <EditorChoice/>
        <div className={classes.ConcertAndInterview}>
          <LastConcert/>
          <Interview/>
        </div>
      </div>
    );
  }
}

export default ShowBiz;
