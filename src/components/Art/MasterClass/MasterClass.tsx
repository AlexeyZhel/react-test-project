import React, {Component} from "react";
import classes from './MasterClass.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import masterClassImage from '../../../assets/images/master-class.png'
import {Button, ButtonType} from "../../Common/Button";
import SocialNetworkButtons from "../../Common/SocialNetworkButtons/SocialNetworkButtons";

export interface IMasterClassState {
    buttonFloatY: number
    isSocialVisible: boolean
}

class MasterClass extends Component<{}, IMasterClassState> {
    constructor(props: {}) {
        super(props);
        this.state = {
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
        let buttonFloatY;
        const backgroundOffset = 50;
        const backgroundYTrigger = 1350;
        const yPosition = window.scrollY;

        buttonFloatY = (yPosition > backgroundYTrigger) ? -backgroundOffset : 0;
        if (buttonFloatY !== this.state.buttonFloatY) {
            this.setState({buttonFloatY: buttonFloatY});
        }
    };

    render() {
        const buttonTransformStyles = {
            transform: `translate(0px, ${this.state.buttonFloatY}px)`
        };

        return (
            <div className={classes.MasterClass} onMouseMove={this.onMouseMove} onMouseOut={this.onMouseOut}>
                <div className={classes.MasterClassImage}>
                    <FloatingImage src={masterClassImage} width={693} height={388} float={true}/>
                    <SocialNetworkButtons className={classes.ArtSocialNetworkButtons}
                                          visible={this.state.isSocialVisible}/>
                </div>
                <div className={classes.MasterClassNews}>
                    <div className={classes.MasterClassTitle}>
                        Мастер-класс настенной живописи в санкт-петербурге
                    </div>
                    <div className={classes.MasterClassDescription}>
                        Серией крупных концертов в России завершается юбилейный гастрольный тур, посвященный 50-летию
                        легендарного коллектива. В мастер-классе приняли участие 10 тысяч человек.
                    </div>
                    <div className={classes.MasterClassButtonContainer} style={buttonTransformStyles}>
                        <Button className={classes.MasterClassButton} btnType={ButtonType.TextWithArrow}
                                text={'Полностью'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MasterClass;
