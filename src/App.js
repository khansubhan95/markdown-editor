import React from 'react';
import './App.css';

var marked = require('marked');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '### Heading\n\n![](https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg)',
        }
    }

    update(event) {
      let val = event.target.value; 
        this.setState({input: val});  
    }

    getMarkup(value) {
        var markup = marked(value);
        return {__html: markup};
    }

    render() {
        
        return (
          <div className = "container-fluid markdown-container">
            <div className="row markdown-row">
              <div className = "col input">
                <textarea 
                onChange = {this.update.bind(this)} 
                defaultValue = {this.state.input} />
              </div>

              <div className="col output" style={{marginLeft:10}} dangerouslySetInnerHTML={this.getMarkup(this.state.input)}>
              </div>
            </div>
          </div>
      )
    }        
}

export default App;
