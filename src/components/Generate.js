import React, { Component } from 'react';

class Generate extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      pinone: '',
      pintwo: '',
      pinthree: '',
      pinfour: '',
      pinfive: '',
      items: []
    }
    
    this.handleDeleteRow = this.handleDeleteRow.bind(this);
 
  };

  handleDeleteRow(i) {
    let dels = [...this.state.dels]
    dels.splice(i, 1)
    this.setState({ 
      dels: dels
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({pinone: this.state.pinone, pintwo: this.state.pintwo,
    pinthree: this.state.pinthree, pinfour: this.state.pinfour, pinfive: this.state.pinfive});

    this.setState({
      items,
      pinone: '',
      pintwo: '',
      pinthree: '',
      pinfour: '',
      pinfive: ''
    });
  };

  handleInputChange = (e) => {
    e.preventDefault();
    const re = /^[1\b]+$/;
    if (re.test(e.target.value)) {
    this.setState({ [e.target.name]: e.target.value });
    }
  };
  
  render() {
    const { pinone, pintwo, pinthree, pinfour, pinfive } = this.state
    return (
      <div>
        <Form 
        handleFormSubmit={ this.handleFormSubmit } 
        handleInputChange={ this.handleInputChange } 

        newPinone={ pinone } newPintwo={ pintwo }
        newPinthree={ pinthree } newPinfour={ pinfour }
        newPinfive={ pinfive }/>
        <Table items={ this.state.items }/>
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table className="table center table-condensed">
          <tbody>

            {items.map((dels, i) => {
              return (
                <tr key={i}>
                  <td><input type="text" className="w-20" placeholder="Name" /></td>
                  <td>{dels.pinone}</td>
                  <td>{dels.pintwo}</td>
                  <td>{dels.pinthree}</td>
                  <td>{dels.pinfour}</td>
                  <td>{dels.pinfive}</td>
                  <td><button className="btn btndanger">Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    const { newPinone, newPintwo, newPinthree, newPinfour, newPinfive  } = this.props
    return (
      <div id="Form">
        <div className="top-m">

        <form onSubmit={this.props.handleFormSubmit}>

          <input 
          value={newPinone} 
          className="w-100"
          type="text"
          minLength="4" 
          maxLength="4" 
          name="pinone" 
          onChange={this.props.handleInputChange} />

          <input 
          value={newPintwo} 
          className="w-100"
          type="text"
          minLength="4" 
          maxLength="4" 
          name="pintwo" 
          onChange={this.props.handleInputChange} />

          <input 
          value={newPinthree} 
          className="w-100"
          type="text"
          minLength="4" 
          maxLength="4" 
          name="pinthree" 
          onChange={this.props.handleInputChange} />

          <input 
          value={newPinfour} 
          className="w-100"
          type="text"
          minLength="4" 
          maxLength="4" 
          name="pinfour" 
          onChange={this.props.handleInputChange} />

          <input value={newPinfive} 
          className="w-100"
          type="text"
          minLength="4" 
          maxLength="4"  
          name="pinfive" 
          onChange={this.props.handleInputChange} />

          <br/>
          <input type="submit" class="btn btn-brdr" value="Generate" />
          <input type="button" class="btn btnblue" value="Save" />
        </form>
      </div>
      </div>
    );
  }
}

export default Generate;