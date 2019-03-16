import React, {Component} from "react";
import classes from './Header.module.scss'
import {Button, ButtonType} from "../Common/Button";

interface IHeaderState {
    isTop: boolean
}

class Header extends Component<{}, IHeaderState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isTop: true
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (): void => {
        this.setState({isTop: window.scrollY === 0});
    };

    render() {
        let underline, production, headerStyles;
        if (this.state.isTop) {
            underline = (<div className={classes.Underline}></div>);
            production = (<div className={classes.Production}>production</div>)
        } else {
            headerStyles = {borderBottom: '2px solid #9a9a9a'}
        }

        return (
            <div className={classes.Header} style={headerStyles}>
                <div className={classes.HeaderContent}>
                    <div className={classes.LetItShow}>
                        <div className={classes.LetItShowSlogan}>LET !T SH<span className={classes.OLetter}>O</span>W</div>
                        {underline}
                        {production}
                    </div>
                    <nav className={classes.NavBar}>
                        <a className={classes.NavItem} href="#showbiz">Шоубиз</a>
                        <a className={classes.NavItem} href="#art">Искусство</a>
                        <a className={classes.NavItem} href="#fashion">Красота</a>
                        <a className={classes.NavItem} href="#society">Общество</a>
                    </nav>
                    <Button btnType={ButtonType.Arrow}/>
                </div>

            </div>
        );
    }
}

export default Header;
