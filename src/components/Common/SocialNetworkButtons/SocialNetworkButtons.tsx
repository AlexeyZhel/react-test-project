import React, {Component} from 'react';
import classes from './SocialNetworkButtons.module.scss'
import {ISocialNetworkButtonsProps} from "./SocialNetworkButtons.interface";
import TwitterIcon from '-!svg-react-loader?name=TwitterIcon!../../../assets/icons/twitter-logo.svg';
import FacebookIcon from '-!svg-react-loader?name=TwitterIcon!../../../assets/icons/facebook-logo.svg';
import ContactIcon from '-!svg-react-loader?name=TwitterIcon!../../../assets/icons/contact-logo.svg';

class SocialNetworkButtons extends Component<ISocialNetworkButtonsProps, {}> {
    constructor(props: ISocialNetworkButtonsProps) {
        super(props);
    }

    render() {
        const buttonStyles = !this.props.visible ?{
            display: 'none'
        } : {};

        return (
            <div className={[
                classes.SocialNetworkButtons,
                this.props.className
            ].join(' ')} style={buttonStyles}>
                <div className={[
                    classes.SocialNetworkButton,
                    classes.TwitterIcon
                ].join(' ')}>
                    <TwitterIcon/>
                </div>
                <div className={[
                    classes.SocialNetworkButton,
                    classes.FacebookIcon
                ].join(' ')}>
                    <FacebookIcon/>
                </div>
                <div className={[
                    classes.SocialNetworkButton,
                    classes.ContactIcon
                ].join(' ')}>
                    <ContactIcon/>
                </div>
            </div>
        );
    }
}

export default SocialNetworkButtons

