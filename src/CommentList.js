import React,{Component} from 'react'

class CommentList extends Component{
    constructor(props){
        super(props);

        this.state={
            loading: true,
            error: null,
            value: null
        }
    }

    componentDidMount(){
        this.props.promise.then(response=>response.json())
            .then(value=>this.setState({loading: false, value}))
            .catch(error=>this.setState({loading:false,error}))
    }

    render(){
        const {loading,error,value} = this.state;

        if(loading){
            return <span>Loading</span>;
        }else if(error !== null){
            return <span>Error: {error.message}</span>;
        }else{
            const list = value.data;
            
            return (
                <ul className="comment-box">
                    {
                        list.map((entry,index)=>(
                            <li key={`response-${index}`} className="comment-item">
                                <p className="comment-item-name">{entry.author}</p>
                                <p className="comment-item-content">{entry.body}</p>
                            </li>
                        ))
                    }
                </ul>
            );
        }
    }
}

export default CommentList;