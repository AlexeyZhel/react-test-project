import React, {Component} from "react";
import classes from './SummerColor.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import summerImage from '../../../assets/images/summer-color.png'
import {Button, ButtonType} from "../../Common/Button";
import SocialNetworkButtons from "../../Common/SocialNetworkButtons/SocialNetworkButtons";

export interface ISummerClassState {
    buttonFloatY: number
    contentFloatY: number
    isSocialVisible: boolean
}

class SummerColor extends Component<{}, ISummerClassState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            buttonFloatY: 0,
            contentFloatY: 0,
            isSocialVisible: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    onMouseMove = () => {
        if (!this.state.isSocialVisible) {
            this.setState({
                isSocialVisible: true
            });
        }
    };

    onMouseOut = () => {
        if (this.state.isSocialVisible) {
            this.setState({
                isSocialVisible: false
            });
        }
    };

    handleScroll = (): void => {
        let buttonFloatY, contentFloatY;
        const buttonOffset = 200;
        const buttonYTrigger = 2200;
        const contentOffset = 200;
        const contentYTrigger = 2200;
        const yPosition = window.scrollY;

        buttonFloatY = (yPosition > buttonYTrigger) ? -buttonOffset : 0;
        contentFloatY = (yPosition > contentYTrigger) ? -contentOffset : 0;
        if (buttonFloatY !== this.state.buttonFloatY || contentFloatY !== this.state.contentFloatY) {
            this.setState({
                buttonFloatY: buttonFloatY,
                contentFloatY: contentFloatY
            });
        }
    };

    render() {
        const buttonTransformStyles = {
            transform: `translate(0px, ${this.state.buttonFloatY}px)`
        };
    
        const contentTransformStyles = {
            transform: `translate(0px, ${this.state.contentFloatY}px)`
        };

        return (
            <div className={classes.SummerColor} onMouseOut={this.onMouseOut} onMouseMove={this.onMouseMove}>
                <div className={classes.ImageContainer} style={contentTransformStyles}>
                    <FloatingImage src={summerImage} width={593} height={501} float={true}/>
                    <SocialNetworkButtons className={classes.SummerColorSocialNetworkButtons}
                                          visible={this.state.isSocialVisible}/>
                </div>
                <div className={classes.SummerColorInfo} style={contentTransformStyles}>
                    <div className={classes.SummerColorTitle}>
                        Какого цвета лето?
                    </div>
                    <div className={classes.SummerColorText}>
                        Сейчас середина января, а значит, примерно
                        через месяц в магазины начнет поступать одежда
                        сезона весна-лето 2015. Мы выбрали 23 ключевые тенденции,
                        под знаком которых пройдет модный теплый сезон в этому году.
                    </div>
                </div>
                <div className={classes.SummerColorButtonContainer} style={buttonTransformStyles}>
                    <Button btnType={ButtonType.TextWithArrow} className={classes.SummerColorButton} text='Полностью'/>
                </div>
            </div>
        );
    }
}

export default SummerColor;
