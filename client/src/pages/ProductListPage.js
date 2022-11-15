import React from "react";
import Axios from "axios";
import ProductList from "../components/ProductList";
import ProductSort from "../components/ProductSort";
import ProductFilterBar from "../components/ProductFilterBar";

const sortOptions = ["None", "Price ascending", "Price descending", "Rating ascending", "Rating descending"];
export default class ProductListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{ product_id: 1, product_name: "Mock", price: "0.00" }],
      sortIndex: 0, // Refer to sortOptions
    }
  }
  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ProductSort sortOptions={sortOptions} onSelect={this.sortOnSelect} />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ProductFilterBar onChange={() => { }} />
            <ProductList data={this.state.products} />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.getProduct();
  }
  getProduct = (sortIndex) => {
    let url = "http://localhost:3001/api/products";
    switch (sortIndex) {
      case 1: // Price ASC
        url = `${url}?sortfield=price&sortorder=asc`;
        break;
      case 2: // Price DESC
        url = `${url}?sortfield=price&sortorder=desc`;
        break;
      case 3: // Rating ASC
        url = `${url}?sortfield=rating&sortorder=asc`;
        break;
      case 4: // Rating DESC
        url = `${url}?sortfield=rating&sortorder=desc`;
        break;
      default: // NON
        url = "http://localhost:3001/api/products";
    }
    Axios.get(url)
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => {
        alert("Failed to retrieve products");
      });
  }
  sortOnSelect = (sortIndex) => {
    this.getProduct(sortIndex);
  }
}