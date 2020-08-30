import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const url = "http://localhost:3000/pizzas/"

class App extends Component {

    state = {
        pizzas: [],
        selectedPizza: {
            id: '',
            topping: '',
            size: '',
            vegetarian: ''
        }
    }

    pizzaFormClickHandler = (obj) => {
        this.setState({
            selectedPizza: obj
        })
    }

    changePizzaHandler = (field, value, id) => {
        if (field === "topping") {
            this.setState({
                selectedPizza: {
                    id: id,
                    topping: value
                }
            })
        } else if (field === "size") {
            this.setState({
                selectedPizza: {
                    id: id,
                    size: value
                }
            })
        } else if (field === "vegetarian") {
            this.setState({
                selectedPizza: {
                    id: id,
                    vegetarian: true
                }
            })
        } else if (field === "notvegetarian") {
            this.setState({
                selectedPizza: {
                    id: id,
                    vegetarian: false
                }
            })
        }
    }

    submitPizzaHandler = (e) => {
        console.log("submitting to API", this.state.selectedPizza)
        const data = this.state.selectedPizza
        const packet = {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(url + this.state.selectedPizza.id, packet)
            .then(res=> res.json())
    }

    componentDidMount() {
        fetch(url)
            .then(res=> res.json())
            .then(pizzas => this.setState({pizzas: pizzas}))
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <PizzaForm selectedPizza={this.state.selectedPizza} changePizzaHandler={this.changePizzaHandler} submitPizzaHandler={this.submitPizzaHandler}/>
                <PizzaList pizzas={this.state.pizzas} pizzaFormClickHandler={this.pizzaFormClickHandler}/>
            </Fragment>
        );
    }
}

export default App;
