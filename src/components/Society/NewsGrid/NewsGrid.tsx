import React, {Component} from "react";
import classes from './NewsGrid.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import firstNewsImage from '../../../assets/images/news-1.png'
import secondNewsImage from '../../../assets/images/news-2.png'
import thirdNewsImage from '../../../assets/images/news-3.png'
import fourthNewsImage from '../../../assets/images/news-4.png'

export interface INewsGridState {
    firstXPosition: number
    secondXPosition: number
    thirdXPosition: number
    fourthXPosition: number
}

const xOffset = 200;

class NewsGrid extends Component<{}, INewsGridState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            firstXPosition: 0,
            secondXPosition: 0,
            thirdXPosition: 0,
            fourthXPosition: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    getXPosition = (itemPosition: number, scrollPosition: number, triggerStart: number, triggerEndStep: number, xOffset: number): number => {
        let xPosition: number = 0;
        const yTriggerEnd = triggerStart + triggerEndStep * itemPosition;

        if (scrollPosition > triggerStart && scrollPosition < yTriggerEnd) {
            xPosition = Math.floor((scrollPosition - triggerStart) / (yTriggerEnd - triggerStart) * xOffset * itemPosition);
        } else {
            if (scrollPosition >= yTriggerEnd) {
                xPosition = xOffset * itemPosition;
            } else {
                xPosition = 0;
            }
        }
        return xPosition;
    };

    handleScroll = (): void => {
        const triggerEndStep = 150;
        const triggerStart = 2200;
        const yPosition = window.scrollY;
        const firstXPosition = this.getXPosition(1, yPosition, triggerStart, triggerEndStep, xOffset);
        const secondXPosition = this.getXPosition(2, yPosition, triggerStart, triggerEndStep, xOffset);
        const thirdXPosition = this.getXPosition(3, yPosition, triggerStart, triggerEndStep, xOffset);
        const fourthXPosition = this.getXPosition(4, yPosition, triggerStart, triggerEndStep, xOffset);

        if (firstXPosition !== this.state.firstXPosition ||
            secondXPosition !== this.state.secondXPosition ||
            thirdXPosition !== this.state.thirdXPosition ||
            fourthXPosition !== this.state.fourthXPosition) {
            this.setState({
                firstXPosition: firstXPosition,
                secondXPosition: secondXPosition,
                thirdXPosition: thirdXPosition,
                fourthXPosition: fourthXPosition
            });
        }
    };

    render() {
        const firstItemTransformStyles = {
            transform: `translate(${this.state.firstXPosition}px, 0px)`,
            opacity: this.state.firstXPosition/xOffset
        };
        const secondItemTransformStyles = {
            transform: `translate(${this.state.secondXPosition}px, 0px)`,
            opacity: (this.state.secondXPosition - xOffset)/xOffset
        };
        const thirdItemTransformStyles = {
            transform: `translate(${this.state.thirdXPosition}px, 0px)`,
            opacity: (this.state.thirdXPosition - 2*xOffset)/xOffset
        };
        const fourthItemTransformStyles = {
            transform: `translate(${this.state.fourthXPosition}px, 0px)`,
            opacity: (this.state.fourthXPosition - 3*xOffset)/xOffset
        };

        return (
            <div className={classes.NewsGrid}>
                <div className={[classes.NewsContainer, classes.FirstItem, classes.FloatItem].join(' ')}
                     style={firstItemTransformStyles}>
                    <FloatingImage src={firstNewsImage} width={190} height={190}/>
                    <div className={classes.ImageText}>Глобальная Блокировка</div>
                </div>
                <div className={[classes.NewsContainer, classes.SecondItem, classes.FloatItem].join(' ')}
                     style={secondItemTransformStyles}>
                    <FloatingImage src={secondNewsImage} width={190} height={190}/>
                    <div className={classes.ImageText}>Запрет на улов в японском море</div>
                </div>
                <div className={[classes.NewsContainer, classes.ThirdItem, classes.FloatItem].join(' ')}
                     style={thirdItemTransformStyles}>
                    <FloatingImage src={thirdNewsImage} width={190} height={190}/>
                    <div className={classes.ImageText}>Ген прокурор был заядлым геймером</div>
                </div>
                <div className={[classes.NewsContainer, classes.FourthItem, classes.FloatItem].join(' ')}
                     style={fourthItemTransformStyles}>
                    <FloatingImage src={fourthNewsImage} width={190} height={190}/>
                    <div className={classes.ImageText}>Латвия: законы просты</div>
                </div>
            </div>
        );
    }
}

export default NewsGrid;
