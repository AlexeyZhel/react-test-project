import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MasterClass from "./components/Art/MasterClass/MasterClass";
import Pokras from "./components/Art/Pokras/Pokras";
import Exhibition from "./components/Art/Exhibition/Exhibition";
import SummerColor from "./components/Fashion/SummerColor/SummerColor";
import ImageGrid from "./components/Fashion/ImageGrid/ImageGrid";
import MainNews from "./components/Society/MainNews/MainNews";
import NewsGrid from "./components/Society/NewsGrid/NewsGrid";
import ShowBiz from "./components/ShowBiz/ShowBiz";
import classes from './App.module.scss'

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Header/>
                <div className={classes.Content}>
                    <ShowBiz/>
                    <div>
                        <MasterClass/>
                        <Pokras/>
                        <Exhibition/>
                    </div>
                    <div>
                        <SummerColor/>
                        <ImageGrid/>
                    </div>
                    <div>
                        <MainNews/>
                        <NewsGrid/>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default App;
