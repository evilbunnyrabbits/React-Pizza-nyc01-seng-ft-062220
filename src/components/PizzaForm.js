import React from "react"

class PizzaForm extends React.Component{

    state = {
        selectedPizza: {
            topping: '',
            size: '',
            vegetarian: ''
        }
    }

    onChangeHandler = (e) => {
        this.props.changePizzaHandler(e.target.name, e.target.value, this.props.selectedPizza.id)
    }

    submitHandler = (e) => {
        this.props.submitPizzaHandler(e)
    }



    render() {

        return(
            <form onSubmit={this.submitHandler}>
            <div className="form-row">
                <div className="col-5">
                    <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" onChange={this.onChangeHandler} value={this.props.selectedPizza.topping}/>
                </div>
                <div className="col">
                    <select value={this.props.selectedPizza.size} name="size" onChange={this.onChangeHandler} className="form-control">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="Vegetarian" name="vegetarian" onClick={this.onChangeHandler} checked={this.props.selectedPizza.vegetarian ? true : false}/>
                        <label className="form-check-label">
                            Vegetarian
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="Not Vegetarian" name="notvegetarian" onClick={this.onChangeHandler} checked={this.props.selectedPizza.vegetarian ? false : true}/>
                        <label className="form-check-label">Not Vegetarian</label>
                    </div>
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-success" onClick={this.submitHandler}>Submit</button>
                </div>
            </div>
            </form>
        )
    }
}

export default PizzaForm
