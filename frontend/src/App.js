// React
import React, { Component } from "react";
// Semantic UI Components
import { Grid, Container } from "semantic-ui-react";
// Components
import { Routes, Route, Link } from "react-router-dom";
import Title from "./components/title/title";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
// Page Components
import Home from "./components/home-page/home-page";
import DealsPage from "./components/deals-page/deals-page";
import MapPage from "./components/map-page/map-page";
import AffiliatesPage from "./components/affiliates-page/affiliates-page";
import ContactPage from "./components/contact-page/contact-page";
import BlueOwlBarPage from "./components/blue-owl-bar-page/blue-owl-bar-page";
import AjsPage from "./components/ajs-page/ajs-page";
import PaddysPage from "./components/paddys-page/paddys-page";
import WelchAveStationPage from "./components/welch-ave-station-page/welch-ave-station-page";
// Style Sheets
import "./App.css";
import SearchBar from "./components/searchbar/searchbar";
import Banner from "./components/banner/banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Grid centered columns={3} className="grid">
        <Grid.Row className="titleRow">
          <div>
            <div class="titleBackground"></div>
            <Title />
          </div>
        </Grid.Row>
        <Grid.Row className="navRow">
          <Grid.Column width={2} />
          <Grid.Column className="navColumn" width={12}>
            <Navbar />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
        <Grid.Row className="contentRow">
          <Grid.Column width={2} />
          <Grid.Column width={12} className="contentColumn">
            <div className="routeContent">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="DealsPage" element={<DealsPage />} />
                <Route path="MapPage" element={<MapPage />} />
                <Route path="AffiliatesPage" element={<AffiliatesPage />} />
                <Route path="ContactPage" element={<ContactPage />} />
                <Route path="BlueOwlBarPage" element={<BlueOwlBarPage />} />
                <Route path="AjsPage" element={<AjsPage />} />
                <Route path="PaddysPage" element={<PaddysPage />} />
                <Route
                  path="WelchAveStationPage"
                  element={<WelchAveStationPage />}
                />
              </Routes>
            </div>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
        <Grid.Row className="footerRow">
          <Grid.Column width={2} />
          <Grid.Column width={12} className="footerColumn">
            <Footer />
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
