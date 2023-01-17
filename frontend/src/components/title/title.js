import React from "react";
import Logo from "./images/The-Move-Logo.png";
import styles from "./title.module.css";

const Title = () => <img className={styles.logo} src={Logo} />;

Title.propTypes = {};

Title.defaultProps = {};

export default Title;
