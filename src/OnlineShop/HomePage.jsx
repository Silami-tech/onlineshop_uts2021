import React, { Component } from 'react';
import Item from './item';
import './HomePage.css';


class Homepage extends Component {
    state = {
        listArtikel: []
    }

    componentDidMount(){
        fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(jsonHasilAmbilDariAPI =>{
            this.setState({
                listArtikel: jsonHasilAmbilDariAPI
            })
        })
    }
    render() {
        return (
           <div className="general">
               <div className="row">
               {
                    this.state.listArtikel.map(artikel => {
                        return <Item    key = {artikel.id}
                            linkGambar={artikel.gambar}
                            itemName = {artikel.nama}
                            itemPrice = {artikel.harga}
                            itemStock = {artikel.stok}
                        />
                    })
                }

               </div>
     
           </div>

            
           
        )
    }
}

export default Homepage;