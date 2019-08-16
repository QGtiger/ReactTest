import React, {Component} from 'react'

class SingleSelect extends Component{
    constructor(props){
        super(props);
        this.state = {
            area: 'hangzhou',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            area: e.target.value
        })
    }

    render(){
        const {area} = this.state;
        return (
            <select value={area} onChange={this.handleChange}>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="hangzhou">杭州</option>
            </select>
        );
    }
}

export default SingleSelect;