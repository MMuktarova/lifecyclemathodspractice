
import { Component } from "react"

class Counter extends Component{
    constructor() {
        super();
        this.state = {
            counter:0,
        }
    }
  
    componentDidUpdate() {
        if (this.state.counter < 50 & this.state.counter > 4) {
            console.log(this.state.counter)
            this.setState({ counter: this.state.counter + 1 })
        }
    }
    render() {
        return (
            <>
                <h1>{ this.state.counter}</h1>
                <button onClick={()=>this.setState({counter:this.state.counter +1})}>Add one</button>
            </>
        )
    }
}

export default Counter
