import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this)
  }
  
  increment() {
    this.setState({
      counter : this.state.counter + 1
    })
  }

  render () {
    return (
      <div>
	<p>Counter: {this.state.counter}</p>
 	<button onClick={this.increment}>Increase Count </button>
      </div>      
    )
  }

}
ReactDOM.render(<App/>, document.getElementById('app'))

