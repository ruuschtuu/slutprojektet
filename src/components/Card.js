import React, { Component } from "react";
import GetCard from "./GetCard";
import axios from "axios";



class Card extends Component {


    state = {
        products: [],
        user: []
    }

    async componentDidMount() {
        const res = await axios.get("http://localhost:1337/products")
        console.log(res.data);
        this.setState({ products: res.data })
    }


    render() {
        return (
            <div>
                {this.state.products.map((product) =>
                    <GetCard
                        key={product.id}
                        docId={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={"http://localhost:1337" + product.image.url}


                    />
                )}

            </div>

        )
    }
}
export default Card;