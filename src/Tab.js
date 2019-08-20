import React, {Component, cloneElement} from 'react'
import classnames from 'classnames'

class TabNav extends Component{
    getTabs(){
        const {panels} = this.props;
        return React.Children.map(panels,(child)=>{return <span>{child}</span>});
    }

    componentDidMount(){
        React.Children.map([<p order={2}>2</p>],(child)=>{
            console.log(child.props.order)
            return <p>{child}</p>})
    }

    render(){
        return (
            <div>
                {this.getTabs()}
            </div>
        )
    }
}

export default TabNav;