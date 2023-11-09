import { Component } from "react";
export default class CounterApp extends Component {
    state = {
        count: 0
    }
    increment = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    decrement = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    reset = () => {
        this.setState({
            count: 0
        });
    }
    render() {
        return (
            <div>
                <p>the counter is: {this.state.count}</p>

                <button onClick={this.increment}>increment button</button><br />
                <button onClick={this.decrement}>decrement button</button><br />
                <button onClick={this.reset}>reset button</button>
            </div>
        )
    }
}