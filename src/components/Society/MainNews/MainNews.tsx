import React, {Component} from "react";
import classes from './MainNews.module.scss'
import FloatingImage from "../../Common/FloatingImage/FloatingImage";
import mainNewsImage from '../../../assets/images/news-main.png'
import {Button, ButtonType} from "../../Common/Button";
import SocialNetworkButtons from "../../Common/SocialNetworkButtons/SocialNetworkButtons";

export interface IMainNewsState {
    isSocialVisible: boolean
}

class MainNews extends Component<{}, IMainNewsState> {
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
            <div className={classes.MainNews} onMouseOut={this.onMouseOut} onMouseMove={this.onMouseMove}>
                <div className={classes.NewsImageContainer}>
                    <FloatingImage src={mainNewsImage} width={299} height={370} float={true}/>
                    <SocialNetworkButtons className={classes.MainNewsSocialNetworkButtons}
                                          visible={this.state.isSocialVisible}/>
                </div>
                <div className={classes.NewsTitle}>
                    Почему нельза перекрашивать фотографии?
                </div>
                <Button className={classes.NewsButton} btnType={ButtonType.TextWithArrow} text='Полностью'/>
            </div>
        );
    }
}

export default MainNews;
