import React, { Component } from 'react'
import NHMProductList from './Components/NHMProductList';
import NHMProductAdd from './Components/NHMProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    products : [
      { title: 'Cu li Le Hoang Long', id: 1 , status:1},
      { title: 'Gac Cong dinh thu Khac Duy', id: 2 , status:1},
      { title: 'Chủ Nợ Ngo Hoang Minh', id: 2210900044 , status:0},
    ]
  }
  
  }
  nhmHandleSubmit = (param)=>{
    console.log("App",param);
    //them vao mang du lieu product
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
      
    })
  }
  render() {
    return (
      <div className='cointaner border mt-5'>
        <h1>Ngo Hoang Minh - Render data - Event Form</h1>
        <hr/>
        <NHMProductList renderProducts={this.state.products}/>
        <hr/>
        <NHMProductAdd onSummit = {this.nhmHandleSubmit} />
      </div>
    )
  }
}
