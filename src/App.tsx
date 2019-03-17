import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShowBiz from "./components/ShowBiz/ShowBiz";
import classes from './App.module.scss'
import Art from "./components/Art/Art";
import Fashion from "./components/Fashion/Fashion";
import Society from "./components/Society/Society";

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Header/>
                <div className={classes.Content}>
                    <ShowBiz/>
                    <Art/>
                    <Fashion/>
                    <Society/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
