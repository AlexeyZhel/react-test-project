import React, {Component} from "react";
import classes from './Interview.module.scss'
import dornImage from '../../../assets/images/dorn.png'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";

export interface IInterviewState {
  componentFloatY: number;
}

class Interview extends Component<{}, IInterviewState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      componentFloatY: 0
    };
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = (): void => {
    let componentFloatY;
    const componentOffset = 50;
    const componentYTrigger = 300;
    const yPosition = window.scrollY;
    
    componentFloatY = (yPosition > componentYTrigger) ? -componentOffset : 0;
    if (componentFloatY !== this.state.componentFloatY) {
      this.setState({componentFloatY: componentFloatY});
    }
  };
  
  
  render() {
    const componentTransformStyles = {
      transform: `translate(0px, ${this.state.componentFloatY}px)`
    };
    
    return (
      <div className={classes.Interview} style={componentTransformStyles}>
        <div className={classes.InterviewImageContainer}>
          <FloatingImage className={classes.InterviewImage} src={dornImage} width={388} height={258}/>
        </div>
        
        <div className={classes.InterviewContent}>
          <div className={classes.InterviewTitle}>
            <div className={classes.TitleContent}>
              Интервью: Дорн
            </div>
          </div>
          <div className={classes.InterviewText}>
            Иван Дорн рассказывает о любви принцессы и о том, как он встретил свое счастье. Счастье оказалось
            мимолетным.
          </div>
        </div>
      </div>
    );
  }
}

export default Interview;
