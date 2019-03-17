import React, {Component} from "react";
import classes from './Header.module.scss'
import {Button, ButtonType} from "../Common/Button";
import {Link} from 'react-scroll'

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
            headerStyles = {borderBottom: '2px solid #9a9a9a', boxShadow: '0 2px 40px rgba(0, 0, 0, 0.47)'}
        }

        return (
            <div className={classes.Header} style={headerStyles}>
                <div className={classes.HeaderContent}>
                    <div className={classes.LetItShow}>
                        <div className={classes.LetItShowSlogan}>LET !T SH<span className={classes.OLetter}>O</span>W
                        </div>
                        {underline}
                        {production}
                    </div>
                    <nav className={classes.NavBar}>
                        <Link className={classes.NavItem} to="showbiz" smooth={true} duration={1000}
                              delay={50}>Шоубиз</Link>
                        <Link className={classes.NavItem} to="art" smooth={true} duration={1000}
                              delay={50}>Искусство</Link>
                        <Link className={classes.NavItem} to="fashion" smooth={true} duration={1000}
                              delay={50}>Красота</Link>
                        <Link className={classes.NavItem} to="society" smooth={true} duration={1000}
                              delay={50}>Общество</Link>
                    </nav>
                    <Button btnType={ButtonType.Arrow}/>
                </div>

            </div>
        );
    }
}

export default Header;
