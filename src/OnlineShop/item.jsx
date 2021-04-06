import React, { Component } from 'react'
import './item.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
function Item(props) {
    return (
        
            <div className="item">
                <div className="left">
                    <img src={ props.linkGambar }
                    width = {400}
                    height = {300}/>
                </div>

                <div className="right" >
                    
                    <div className="itemName">
                        {props.itemName}
                    </div>
                    <div className="itemPrice">
                        <b>Rp</b> {props.itemPrice}
                    </div>
                    <div className="itemStock">
                         <b>Item left:</b> {props.itemStock}
                    </div>
                    <div className="detailsBtn">
                        <Link to = {`/${props.itemName}/${props.itemPrice}`}>
                            <button className="details">BUY</button>
                        </Link>
                    </div>
                </div>

               
                 
                
            </div>
        
    );
}

export default Item;
