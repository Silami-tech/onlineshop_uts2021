import React, { Component } from 'react'
import './info.css';
import Header from './header'
import Silami from './Silami.jpeg';
class Contact extends Component {
    render() {
        return (
            <div>
                <div className="center">
                    <h1>Informations</h1>
                    <img src= {Silami} 
                        height = {300}
                        width = {225}/>
                </div>
                <div className="centerDiv">
                   
                    
                    <div className="left">
                        <h1>Nariandrimalala</h1> 
                        <h1>Silami Narindra </h1>
                        <h1>1841720222 </h1>
                        <h1>D4 Information Technology </h1>
                    </div>

                    <div className="right">
                        <p>
                            I am from Madagascar, and it's my pleasure to let you
                            know little bit about mysefl. I was born since 10 August 1995,
                            at Antananarivo, capital of my country

                            
                        </p>
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Contact;