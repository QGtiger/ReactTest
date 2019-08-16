import React, {Component} from 'react';

class MultipleSelect extends Component{
    constructor(props){
        super(props);
        this.state={
            area: ['beijing','hangzhou'],
            value: 'test'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const {options} = e.target;

        const area = Object.keys(options).filter(i=>options[i].selected === true).map(i=>options[i].value);

        this.setState({
            area
        })
    }

    render(){
        const {area} = this.state;

        return (
            <div>
                <p>{area}</p>
                <select multiple={true} value={area} onChange={this.handleChange}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="hangzhou">杭州</option>
                </select>
                <input 
                    defaultValue={this.state.value}
                    onChange={e=>{this.setState({value:e.target.value.toUpperCase()})}}
                />
            </div>
        )
    }
}

export default MultipleSelect;