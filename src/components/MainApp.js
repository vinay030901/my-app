import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Users from './Users';
import AddUser from './AddUser';
import CounterApp from './CounterApp';
export default class MainApp extends Component {
    state = {
        headerData: 'welcome to header app',
        footerData: 'welcome to footer app',
        userdata: []
    }
    addUser = (data) => {
        this.setState((prevState) => {
            return {
                userdata: [...prevState.userdata, data]
            }
        })
    }
    deleteAll = (data) => {
        this.setState((prevState) => {
            return {
                userdata: []
            }
        })
    }
    deleteUser = (user) => {
        this.setState((prevState) => ({
            userdata: prevState.userdata.filter((option) => user !== option)
        }));
    }

    componentDidMount() {
        const json = localStorage.getItem('slusers')
        if (json) {
            this.setState({
                userdata: JSON.parse(json)
            })
        }
    }
    componentDidUpdate() {
        const json = JSON.stringify(this.state.userdata)
        localStorage.setItem('slusers', json)
    }

    render() {

        return (
            <div>
                <Header hd={this.state.headerData} />
                <h2>Main app works...</h2>
                <Footer fd={this.state.footerData} />
                <Users userData={this.state.userdata} da={this.deleteAll} dl={this.state.userdata > 0} du={this.deleteUser}></Users>/
                <AddUser au={this.addUser} />
                <br />
                <CounterApp />
            </div>
        )
    }
}