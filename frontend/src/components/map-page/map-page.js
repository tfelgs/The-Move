import React from 'react';
import PropTypes from 'prop-types';
import styles from './map-page.module.css';
import GoogleApi from './GoogleApi'

const MapPage = () => (
  <div className={styles.MapPage}>
    <GoogleApi/>
    MapPage Component
  </div>
);

export default MapPage;
