import React, {Component} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EditorialChoice from "./components/ShowBiz/EditorialChoice/EditorialChoice";
import LastConcert from "./components/ShowBiz/LastConcert/LastConcert";
import Interview from "./components/ShowBiz/Interview/Interview";
import MasterClass from "./components/Art/MasterClass/MasterClass";
import Pokras from "./components/Art/Pokras/Pokras";
import Exhibition from "./components/Art/Exhibition/Exhibition";
import SummerColor from "./components/Fashion/SummerColor/SummerColor";
import ImageGrid from "./components/Fashion/ImageGrid/ImageGrid";
import MainNews from "./components/Society/MainNews/MainNews";
import NewsGrid from "./components/Society/NewsGrid/NewsGrid";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          <EditorialChoice/>
          <LastConcert/>
          <Interview/>
        </div>
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
        <Footer/>
      </div>
    );
  }
}

export default App;
