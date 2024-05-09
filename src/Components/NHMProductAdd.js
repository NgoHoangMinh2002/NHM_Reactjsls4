import React, { Component } from 'react'

export default class NHMProductAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            title:'',
            status:0   
        }
    }

    nhmHandleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    nhmHandleSubmit = (ev)=>{
        ev.preventDefault();
        this.props.onSummit(this.state)
    }
  render() {
    return (
        
      <div>
        <h2>Them moi San Pham</h2>
        <form>
        <div className="input-group mb-3 ">
        <span className="input-group-text" id="basic-addon1">
        ID
     </span>
  <input
    type="text"
    className="form-control"
    name='id'
    value={this.state.id}
    onChange={this.nhmHandleChange}
  />
</div>
<div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon2">
        Title
     </span>
  <input
    type="text"
    className="form-control"
    name='title'
    value={this.state.title}
    onChange={this.nhmHandleChange}
  />
</div>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon3">
    Status
  </span>
  <input
    type="text"
    className="form-control"
    name='status'
    value={this.state.status}
    onChange={this.nhmHandleChange}
  />
</div>
    <button className='btn btn-success' onClick={this.nhmHandleSubmit}>Ghi lai</button>
        </form>
      </div>
    )
  }
}
