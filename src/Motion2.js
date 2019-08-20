import React,{Component} from 'react' 
import {StaggeredMotion, spring, presets} from 'react-motion'

import './motion.css'

class Motion2 extends Component{
    constructor(props){
        super(props);
        
        this.state={
            length: 3
        }

        this.addLength = this.addLength.bind(this);
    }

    addLength(){
        let newLength;
        if(this.state.length){
            newLength = 0;
        }else{
            newLength = 3;
        }

        this.setState({
            length: newLength
        })
    }

    render(){
        let boxes = [];
        for (let i = 0, len = this.state.length; i < len; i++){
            boxes.push({
                scale:0
            })
        }
        return (
            <div>
                <div>
                    {
                        this.state.length > 0 ? (
                            <StaggeredMotion defaultStyles={boxes} 
                                styles={prevStyles=>prevStyles.map((item, i)=>{
                                    return i===0
                                        ? {scale: spring(1, {...presets.noWobble})}
                                        : prevStyles[i-1]
                                })}
                            >
                                {interpolatingStyles=>
                                    <div>
                                        {interpolatingStyles.map((item, i)=>{
                                            return (
                                                <div className="box"
                                                    key={i}
                                                    style={{transform: `scale(${item.scale}, ${item.scale})`}}
                                                ></div>
                                            )
                                        })}
                                    </div>
                                }
                            </StaggeredMotion>
                        ) : null
                    }
                </div>
                <button onClick={this.addLength}>run</button>
            </div>
        )
    }
}

export default Motion2;