import React, {Component} from "react";
import classes from './ImageGrid.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import image1 from '../../../assets/images/grid-1.png'
import image2 from '../../../assets/images/grid-2.png'
import image3 from '../../../assets/images/grid-3.png'
import image4 from '../../../assets/images/grid-4.png'
import image5 from '../../../assets/images/grid-5.png'

export interface IImageGridState {
  firstImagePosition: number
  secondImagePosition: number
  thirdImagePosition: number
  fourthImagePosition: number
  fifthImagePosition: number
}

class ImageGrid extends Component<{}, IImageGridState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      firstImagePosition: 0,
      secondImagePosition: 0,
      thirdImagePosition: 0,
      fourthImagePosition: 0,
      fifthImagePosition: 0
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  getYPosition = (itemPosition: number, scrollPosition: number, triggerStart: number, triggerEnd: number, triggerStep: number, yOffset: number): number => {
    let yPosition: number = 0;
    const yTriggerStart = triggerStart + triggerStep * itemPosition;
    const yTriggerEnd = triggerEnd + triggerStep * itemPosition;
    
    if (scrollPosition > yTriggerStart && scrollPosition < yTriggerEnd) {
      yPosition = Math.floor(-(scrollPosition - yTriggerStart) / (yTriggerEnd - yTriggerStart) * yOffset);
    } else {
      if (scrollPosition >= yTriggerEnd) {
        yPosition = -yOffset;
      } else {
        yPosition = 0;
      }
    }
    return yPosition;
  };
  
  handleScroll = (): void => {
    let firstImagePosition,
      secondImagePosition,
      thirdImagePosition,
      fourthImagePosition,
      fifthImagePosition;
    
    const lineFloat = 100;
    const triggerStart = 1450;
    const triggerEnd = 1600;
    const triggerStep = 50;
    const yPosition = window.scrollY;
    
    firstImagePosition = this.getYPosition(1, yPosition, triggerStart, triggerEnd, triggerStep, lineFloat);
    secondImagePosition = this.getYPosition(2, yPosition, triggerStart, triggerEnd, triggerStep, lineFloat);
    thirdImagePosition = this.getYPosition(3, yPosition, triggerStart, triggerEnd, triggerStep, lineFloat);
    fourthImagePosition = this.getYPosition(4, yPosition, triggerStart, triggerEnd, triggerStep, lineFloat);
    fifthImagePosition = this.getYPosition(5, yPosition, triggerStart, triggerEnd, triggerStep, lineFloat);
    
    if (
      firstImagePosition !== this.state.firstImagePosition ||
      secondImagePosition !== this.state.secondImagePosition ||
      thirdImagePosition !== this.state.thirdImagePosition ||
      fourthImagePosition !== this.state.fourthImagePosition ||
      fifthImagePosition !== this.state.fifthImagePosition
    ) {
      this.setState({
        firstImagePosition: firstImagePosition,
        secondImagePosition: secondImagePosition,
        thirdImagePosition: thirdImagePosition,
        fourthImagePosition: fourthImagePosition,
        fifthImagePosition: fifthImagePosition
      });
    }
  };
  
  render() {
    const firstImageTransformStyles = {
      transform: `translate(0px, ${this.state.firstImagePosition}px)`
    };
    
    const secondImageTransformStyles = {
      transform: `translate(0px, ${this.state.secondImagePosition}px)`
    };
  
    const thirdImageTransformStyles = {
      transform: `translate(0px, ${this.state.thirdImagePosition}px)`
    };
  
    const fourthImageTransformStyles = {
      transform: `translate(0px, ${this.state.fourthImagePosition}px)`
    };
  
    const fifthImageTransformStyles = {
      transform: `translate(0px, ${this.state.fifthImagePosition}px)`
    };
    
    return (
      <div className={classes.ImageGrid}>
        <div className={classes.ImageGridLine}>
          <div className={classes.ImageContainer} style={firstImageTransformStyles}>
            <div className={classes.ImageText}>Yanina</div>
            <FloatingImage src={image1} width={190} height={190}/>
          </div>
          <div className={classes.ImageContainer} style={secondImageTransformStyles}>
            <div className={classes.ImageText}>Индиго мир</div>
            <FloatingImage src={image2} width={190} height={190}/>
          </div>
        </div>
        <div className={classes.ImageGridLine}>
          <div className={classes.ImageContainer} style={thirdImageTransformStyles}>
            <FloatingImage src={image3} width={190} height={190}/>
            <div className={classes.ImageText}>Слишком по делу</div>
          </div>
          <div className={classes.ImageContainer} style={fourthImageTransformStyles}>
            <FloatingImage src={image4} width={190} height={190}/>
            <div className={classes.ImageText}>Фиалковый</div>
          </div>
          <div className={classes.ImageContainer} style={fifthImageTransformStyles}>
            <FloatingImage src={image5} width={190} height={190}/>
            <div className={classes.ImageText}>Форс-мажор</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGrid;
