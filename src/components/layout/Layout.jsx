import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';


function Layout(props){

    return(
       <div className="layout">
           <Header  />
                {props.children}
           <Footer />
       </div>

    )
}

export default Layout;