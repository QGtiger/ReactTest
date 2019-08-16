import React, {Component} from 'react'

class CheckBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            coffee: ["Cappuccino"],
            choices: ["Cappuccino", "CafeMocha", "CaffeLatte"]
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const {checked, value} = e.target;
        let {coffee} = this.state;

        if(checked && coffee.indexOf(value) === -1){
            coffee.push(value);
        }else{
            coffee = coffee.filter(i => i!==value);
        }
        console.log(coffee)
        this.setState((precState)=>{
            return {coffee}
        });

        console.log(this.state.coffee)
    }

    render(){
        const {coffee, choices} = this.state;

        return (
            <div>
                <p>请选择您要的咖啡: {coffee.map((item, index)=>{
                    return <li key={index}>{item}</li>;
                })}
                </p>
                <label>
                    {choices[0]}
                    <input 
                    type="checkbox"
                    value={choices[0]}
                    checked={coffee.indexOf(choices[0]) !== -1}
                    onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    {choices[1]}
                    <input 
                    type="checkbox"
                    value={choices[1]}
                    checked={coffee.indexOf(choices[1]) !== -1}
                    onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    {choices[2]}
                    <input 
                    type="checkbox"
                    value={choices[2]}
                    checked={coffee.indexOf(choices[2]) !== -1}
                    onChange={this.handleChange}
                    />
                </label>
                <br />
            </div>
        )
    }
}

export default CheckBox;