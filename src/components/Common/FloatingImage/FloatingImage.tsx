import React, {Component} from 'react';
import classes from './FloatingImage.module.scss'
import {IFloatingImageProps, IFloatingImageState} from "./FloatingImage.interface";

class FloatingImage extends Component<IFloatingImageProps, IFloatingImageState> {
  constructor(props: IFloatingImageProps) {
    super(props);
    this.state = {
      offsetX: 0,
      offsetY: 0,
      isHovered: false
    }
  }
  
  onMouseMove = (e: any) => {
    this.setState({
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
      isHovered: true
    });
  };
  
  onMouseOut = () => {
    this.setState({
      isHovered: false
    });
  };
  
  render() {
    let transformStyles = {};
    if (this.state.isHovered) {
      const x = Math.floor((this.props.width/2 - this.state.offsetX) * 0.02);
      const y = Math.floor((this.props.height/2 - this.state.offsetY) * 0.02);
      transformStyles = {
        transform: `translate(${x}px, ${y}px) scale(1.02)`
      };
    }

    return (
      <div className={classes.FloatingImageContainer}
           style={{maxWidth: this.props.width, maxHeight: this.props.height}}>
        <div className={classes.FloatingImage} onMouseMove={this.onMouseMove} onMouseOut={this.onMouseOut} style={transformStyles}>
          <img
            src={this.props.src}
            width={this.props.width}
            height={this.props.height}/>
        </div>
      </div>
    );
  }
}

export default FloatingImage

