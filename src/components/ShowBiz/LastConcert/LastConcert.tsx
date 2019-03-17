import React, {Component} from "react";
import classes from './LastConcert.module.scss'
import scorpionsImage from '../../../assets/images/scorpions.png'
import {Button, ButtonType} from "../../Common/Button";
import SocialNetworkButtons from "../../Common/SocialNetworkButtons/SocialNetworkButtons";
import FloatingImage from "../../Common/FloatingImage/FloatingImage";

export interface ILastConcertState {
    isSocialVisible: boolean;
}

class LastConcert extends Component<{}, ILastConcertState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isSocialVisible: false
        }
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

    render() {
        return (
            <div className={classes.LastConcert} onMouseMove={this.onMouseMove} onMouseOut={this.onMouseOut}>
                <div className={classes.LastConcertImage}>
                    <FloatingImage src={scorpionsImage} width={283} height={370}/>
                    <SocialNetworkButtons className={classes.LastConcertSocialNetworkButtons}
                                          visible={this.state.isSocialVisible}/>
                </div>
                <div className={classes.LastConcertDescription}>
                    <div className={classes.LastConcertTitle}>
                        <div className={classes.LastConcertSubTitle}>
                            Прощальный концерт
                        </div>
                        <div className={classes.LastConcertSubTitle}>
                            Scorpions
                        </div>
                    </div>
                    <div className={classes.LastConcertText}>
                        Серией крупных концертов в России завершается юбилейный гастрольный тур Scorpions, посвященный
                        50-летию легендарного коллектива.
                    </div>
                    <Button className={classes.FullButton} btnType={ButtonType.TextWithArrow} text={'Полностью'}/>
                </div>
            </div>
        );
    }
}

export default LastConcert;
