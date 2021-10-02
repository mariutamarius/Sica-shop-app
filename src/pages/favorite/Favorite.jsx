import React from "react";
import Layout from "../../components/layout/Layout";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../favorite/Favorite.css";

function Favorite(props) {

    return(
        <Layout>
            <div className="cart-page content-min-height container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    props.products.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                            <p className="w-25">Total</p>
                        </div>
                        {
                            props.products.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                    </div>
                                    <p className="w-25">{ product.price } { product.currency }</p>
                                    <div className="w-25 d-flex justify-content-center">
                                        <p className="mr-2">{ product.price } { product.currency }</p>
                                    </div>
                                </div>
                            })
                        }
                        
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse la favorite!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
  return {
    products: state.favorite.products,
  };
}
export default connect(mapStateToProps)(Favorite);