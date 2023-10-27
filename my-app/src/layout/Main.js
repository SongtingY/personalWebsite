import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import SideBar from '../components/Template/SideBar';
import Navigation from '../components/Template/Navigation';


const Main = (props) => (
  <HelmetProvider>
    <Helmet>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
        <Navigation />
        <div id="main">
            {props.children}
        </div>
        <SideBar />
    </div>
  </HelmetProvider>
);


export default Main;
