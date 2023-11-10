import { Component } from "react";
import Button from '@mui/material/Button'

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

                <Button onClick={this.increment}>increment button</Button><br />
                <Button onClick={this.decrement}>decrement button</Button><br />
                <Button onClick={this.reset}>reset button</Button>
            </div>
        )
    }
}