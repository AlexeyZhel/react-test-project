import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ShowBiz from "./components/ShowBiz/ShowBiz";
import classes from './App.module.scss'

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Header/>
                <div className={classes.Content}>
                    <ShowBiz/>
                    {/*<div>*/}
                        {/*<MasterClass/>*/}
                        {/*<Pokras/>*/}
                        {/*<Exhibition/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*<SummerColor/>*/}
                        {/*<ImageGrid/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*<MainNews/>*/}
                        {/*<NewsGrid/>*/}
                    {/*</div>*/}
                </div>

                <Footer/>
            </div>
        );
    }
}

export default App;
