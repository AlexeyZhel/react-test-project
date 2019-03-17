import React, {Component} from "react";
import classes from './Pokras.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import pokrasImage from '../../../assets/images/pokras.png'

class Pokras extends Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <div className={classes.Pokras}>
        <div className={classes.PokrasImage}>
          <FloatingImage src={pokrasImage} width={245} height={244}/>
        </div>
        <div className={classes.PokrasTitle}>
          Pokras международный
        </div>
      </div>
    );
  }
}

export default Pokras;
