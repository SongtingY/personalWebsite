import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';


import SideBar from '../components/Template/SideBar';
import Navigation from '../components/Template/Navigation';
import Footer from '../components/Template/Footer';


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
        {props.fullPage ? null : <SideBar />}
        <Footer />
    </div>
  </HelmetProvider>
);

// set type fo main.props
Main.props = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    title:PropTypes.string,
    description: PropTypes.string
}

// set default value to props
Main.defaultProps = {
    children: null,
    title: null,
    description: "Songss' personal websites"
}

export default Main;
