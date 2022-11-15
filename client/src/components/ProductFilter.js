import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import StarIcon from "../images/StarIcon";

// props: selectedIndex, setSelectedIndex
export default function ProductFilter(props) {
    const handleSelectStarRating = (num) => {
        props.setSelectedIndex((num === props.isSelected)? -1 : num);
    }

    return (
    <div style={{ minWidth: 200, paddingLeft: "30px"}}>
        <p className="font-weight-bold">Filter by Rating</p>
        <div style={{display: "flex", flexDirection: "column", marginBottom: "30px"}}>
            <Button variant="light" style={{marginRight: "40px", marginBottom: "7px"}} onClick={()=>handleSelectStarRating(5)} active={(props.isSelected === 5)? true: false}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>
            </Button>
            <Button variant="light" style={{marginRight: "40px", marginBottom: "7px"}} onClick={()=>handleSelectStarRating(4)} active={(props.isSelected === 4)? true: false}>
                <div style={{display: "flex", alignItems: "center", float: "right"}}>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    {`&up`}
                </div>
            </Button>
            <Button variant="light" style={{marginRight: "40px", marginBottom: "7px"}} onClick={()=>handleSelectStarRating(3)} active={(props.isSelected === 3)? true: false}>
                <div style={{display: "flex", alignItems: "center", float: "right"}}>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    {`&up`}
                </div>
            </Button>
            <Button variant="light" style={{marginRight: "40px", marginBottom: "7px"}} onClick={()=>handleSelectStarRating(2)} active={(props.isSelected === 2)? true: false}>
                <div style={{display: "flex", alignItems: "center", float: "right"}}>
                    <StarIcon/>
                    <StarIcon/>
                    {`&up`}
                </div>
            </Button>
        </div>
        <p className="font-weight-bold">Filter by Rating</p>
        <Form>
            <div>
                {/* {props.categories.map((item) => (
                    <Form.Check 
                        type="checkbox"
                        id={item.category_id}
                        label={item.category_name}
                    />
            ))} */}
            </div>
        </Form>
    </div>
    );
}