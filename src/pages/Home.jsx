import React from 'react';
import Layout from '../components/layout/Layout';
import HomeCategory from '../components/home-category/HomeCategory';
import products from '../utils/products.json';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            categoryNames: []
        };
    }

    componentDidMount() {
        const categories = Object.keys(products);
        this.setState({categories});
    }

    render() {

        return (
            <div>
                <Layout>
                    <div className="container">
                        <div className="row">
                            {
                                this.state.categories.map((category, index) => {
                                    return (
                                        <HomeCategory
                                        key={index}
                                        route={category}
                                        name={products[category].name}
                                        description={products[category].description}
                                        image={products[category].image}
                                        />
                                    )

                                })
                            }
                        </div>
                    </div>
                </Layout>
            </div>

        )
    }

}

export default Home;