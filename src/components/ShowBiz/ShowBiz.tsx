import React, {Component} from "react";
import classes from './ShowBiz.module.scss'
import {Button, ButtonType} from "../Common/Button";
import singer from '../../assets/images/singer.png'
import FloatingImage from "../Common/FloatingImage/FloatingImage";
import SocialNetworkButtons from "../Common/SocialNetworkButtons/SocialNetworkButtons";

export interface IShowBizState {
    backgroundFloatY: number;
    buttonFloatY: number;
    isSocialVisible: boolean;
}


class ShowBiz extends Component<{}, IShowBizState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            backgroundFloatY: 0,
            buttonFloatY: 0,
            isSocialVisible: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (): void => {
        let backgroundFloatY, buttonFloatY;
        const backgroundOffset = 230;
        const backgroundYTrigger = 50;
        const buttonOffset = 40;
        const buttonYTrigger = 150;
        const yPosition = window.scrollY;

        backgroundFloatY = (yPosition > backgroundYTrigger) ? -backgroundOffset : 0;
        buttonFloatY = (yPosition > buttonYTrigger) ? -buttonOffset : 0;
        this.setState({backgroundFloatY: backgroundFloatY, buttonFloatY: buttonFloatY});
    };

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


    render() {
        const backgroundTransformStyles = {
            transform: `translate(0px, ${this.state.backgroundFloatY}px)`
        };

        const buttonTransformStyles = {
            transform: `translate(0px, ${this.state.buttonFloatY}px)`
        };

        return (
            <div className={classes.ShowBiz} onMouseMove={this.onMouseMove} onMouseOut={this.onMouseOut}>
                <div className={classes.ShowBizBackground} style={backgroundTransformStyles}></div>
                <div className={classes.EditorialChoice}>
                    <div className={classes.EditorialChoiceText}>
                        Выбор редакции
                    </div>
                    <div className={[
                        classes.EditorialChoiceMainText,
                        classes.EditorialChoiceMainTextFirst
                    ].join(' ')}>
                        EXPROVISION.
                    </div>
                    <div className={classes.EditorialChoiceMainText}>
                        ЗАКУЛИСЫ
                    </div>
                    <div className={classes.EditorialChoiceName}>
                        Анна Простынцева
                    </div>
                    <div className={classes.EditorialChoiceButton} style={buttonTransformStyles}>
                        <Button btnType={ButtonType.Text} text={'Заглянуть'}/>
                    </div>
                </div>
                <div className={classes.SingerImageContainer}>
                    <FloatingImage className={classes.SingerImage} src={singer} width={696} height={653}/>
                    <SocialNetworkButtons className={classes.ShowBizSocialNetworkButtons} visible={this.state.isSocialVisible}/>
                </div>
                <div className={classes.ShowBizText}>
                    <div className={classes.ShowBizLineContainer}>
                        <div className={classes.ShowBizLine}></div>
                    </div>
                    <div className={classes.RotatedTextContainer}>
                        <div className={classes.RotatedText}>
                            Шоубиз
                        </div>
                    </div>
                </div>
                <div className={classes.PlaceHolder}></div>

                {/*<LastConcert/>*/}
                {/*<Interview/>*/}
            </div>
        );
    }
}

export default ShowBiz;
