import React, {Component} from "react";
import classes from './Exhibition.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import exhibitionImage from '../../../assets/images/exhibition.png'

class Exhibition extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.Exhibition}>
              <div className={classes.ExhibitionImage}>
                  <FloatingImage src={exhibitionImage} width={390} height={388}/>
              </div>
              <div className={classes.ExhibitionTitle}>
                  Выставка в гараже. Современное искусство на стенах.
              </div>
      </div>
    );
  }
}

export default Exhibition;
