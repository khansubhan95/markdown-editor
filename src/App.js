import React from 'react';
import './App.css';

var marked = require('marked');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '### heading',
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
          <div>
            <div className = "container">
              <textarea 
              onChange = {this.update.bind(this)} 
              defaultValue = {this.state.input} />

              <span style={{marginLeft:10}} dangerouslySetInnerHTML={this.getMarkup(this.state.input)} />

            </div>
          </div>
      )
    }        
}

export default App;
