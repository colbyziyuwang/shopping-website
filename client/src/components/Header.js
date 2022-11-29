/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import "./css/Header.css"

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
    <Form id="1">
      <div className="container">
        <div className="row">
          <div className="col">
            <img id="img2" src="data:image/png;base64,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" alt="Store Photo" />
          </div>
          <div className="col">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Search for Product</Form.Label>
              <Form.Control /*type="email"*/ onChange={e => this.props.setSearchWord(e.target.value)} placeholder="Enter product name" />
              <Form.Text className="text-muted">
                Click here to search for products.
              </Form.Text>
            </Form.Group>
          </div>
        </div>
      </div>
    </Form>
        
        );
    }
}