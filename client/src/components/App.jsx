import React, { useState } from 'react';
import Header from "./Header";
import topHeader from "../images/topHeader.jpg";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "../store";
import RoomsList from "./RoomsList";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddRoom from "./AddRoom";

import customerInfo from '../CustomerInfo';

function App() {

  const [room, setRoom] = useState(customerInfo);

  function roomHandler(input) {
    setRoom((prevState) => [...prevState, input]);
  }

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <img src={topHeader} alt="topHeader" className="img-fluid top-image" />
          <div className="container-xl">
            <Switch>
              <Route exact path="/">
                <h2 className="my-5">House & Apartments For Sale & Rent</h2>
                <RoomsList data={room}/>
              </Route>
              <Route exact path="/add-rooms">
                <AddRoom onAdd={roomHandler} />
              </Route>
            </Switch>

          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;



















