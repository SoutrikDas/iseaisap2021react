
import './App.css';
import Footer from './components/Footer';


import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Ddaward from './authors/Ddaward';
import Tutorial from './authors/Tutorial';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './Home';
import RegularPapers from './authors/RegularPapers';
import Registration from './registration/Registration';
import HotelReg from './registration/HotelReg';
import Fellowship from './Fellowship';
import Conference from './venue/Conference';
import CampusAcc from './venue/CampusAcc';
import KeynoteSpeakers from './program/KeynoteSpeakers';
import Technical from './program/Technical';
import Tutorials from './program/Tutorials';
import Social from './program/Social';
import Organizing from './committee/Organizing';
import TechnicalCommittee from './committee/TechnicalCommittee';
import Header from './components/Header';
import CustomTimeline from './components/CustomTimeline';

import Alert from './components/Alert';
import events from './components/events'
import headerimg from "./images/headerimage.jpeg";


// import './db/conn';


// let today = new Date(2021,9-1,26)
let today = new Date()


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* {today<= new Date(2021,9-1,15) ? <div className="alert alert-danger m-0 fs-5 " role="alert">
        Paper Submission open till  15<sup>th</sup> September. <a href="https://easychair.org/conferences/?conf=iseaisap2021" className="">Click Here</a>
        </div> : <></>}
        {today <= new Date(2021, 9 - 1, 15) ? (
        <div className="alert alert-danger m-0 fs-5 " role="alert">
          Doctoral Dissertation Submission open till 15<sup>th</sup>{" "}
          September.{" "}
          <Link to="/authors/ddaward" className="">
            Click Here
          </Link>
        </div>
      ) : (
        <></>
      )} */}
        
        <Switch>
          <Route exact path="/">
          <img src={headerimg} alt="" className="" style={{width:'100vw'}} />
            <Header />
            <Home />
          </Route>
          {/* Authors Begin */}
          <Route exact path="/authors/regularpapers">
            <RegularPapers />
          </Route>
          <Route exact path="/authors/ddaward">
            <Ddaward />
          </Route>
          <Route exact path="/authors/tutorial">
            <Tutorial />
          </Route>
          {/* Authors End , Registration Begin */}
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/registration/hotel">
            <HotelReg />
          </Route>
          {/* Registration End  */}
          <Route exact path="/fellowship">
            <Fellowship />
          </Route>
          {/* Venue Begin */}
          <Route exact path="/venue/conference">
            <Conference />
          </Route>
          <Route exact path="/venue/campusacc">
            <CampusAcc />
          </Route>

          {/* Venue End , Program Begin  */}
          <Route exact path="/program/keynotespeakers">
            <KeynoteSpeakers />
          </Route>
          <Route exact path="/program/technical">
            <Technical />
          </Route>
          <Route exact path="/program/tutorials">
            <Tutorials />
          </Route>
          <Route exact path="/program/social">
            <Social />
          </Route>
          {/* Program End , Committee Begin */}
          <Route exact path="/committee/organizing">
            <Organizing />
          </Route>
          <Route exact path="/committee/technical">
            <TechnicalCommittee />
          </Route>
          <Route exact path="/timeline">
            <CustomTimeline />
          </Route>



        </Switch>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
