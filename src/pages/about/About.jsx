import React from "react";
import Layout from "../../components/layout/Layout";
import {Link} from 'react-router-dom';
import "./About.css";
import logo from '../../assets/images/logo.png';

function About() {
  return (
    <div className="container">
      <Layout>
        <h1 className="title">About</h1>
        <Link to="/">
          <img src={logo} alt="text-logo" className="img-class"/>
        </Link>
        <p className="paragraf-about">
          Proiect personal realizat folosind React, React-Router, Redux,
          Bootstrap CSS și Firebase

        </p>
        <div className="logo-cumparaturi">
         
        </div>
      </Layout>
    </div>
  );
}

export default About;