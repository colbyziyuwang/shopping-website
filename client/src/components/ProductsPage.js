import React from "react";
import Axios from "axios";
import './ProductsPage.css';
import ProductFilters from "./ProductFilters";
// React calls componentDidMount twice in dev mode
export default class ServerCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], selected: "0" };
  }
  // Lifecycle
  componentDidMount() {
    this.getProduct();
  }
  // Handler
  handleSelectChange = (index) => {
    debugger;
    console.log("index"+index);
    this.setState({ selected: index });
    this.getProduct(`${index}`);
  }
  getProduct = (selected) => {
    debugger;
    let url = "http://localhost:3001/api/products";
    switch (selected) {
      case "1": // order price asec
        url = `${url}?price=asec`;
        break;
      case "2": // rating > 1
        url = `${url}?rating=1`
        break;
      case "3": // rating > 2
        url = `${url}?rating=2`
        break;
      default:
        url = "http://localhost:3001/api/products";
    }
    Axios.get(url)
      .then(res => {
        this.setState((state, props) => ({
          products: res.data
        }));
      })
      .catch(err => {
        alert("Failed to retrieve products");
      });
  }
  deleteProduct = (id) => {
    Axios.delete(`http://localhost:3001/api/product/${id}`)
      .then(res => {
        alert("Prodcut removed");
        this.getProduct(this.state.selected);
      })
      .catch(err => {
        alert("Failed to delete product");
      });
  }
  render() {
    return (
      <div>
        <ProductFilters value={this.state.selected} onChange={this.handleSelectChange}/>
        <table>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Rating</th>
            <th>Delete product</th>
          </tr>
          {this.state.products.map(item => (
            <tr>
              <td>{item.product_name}</td>
              <td>${item.price}</td>
              <td>{item.description}</td>
              <td>{item.product_rating}</td>
              <td><button onClick={() => this.deleteProduct(item.product_id)}>delete product</button></td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}