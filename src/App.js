import React from 'react';
import logo from './logo.svg';
import './App.css';
import CheckBox from './CheckBox';
import SingleSelect from './SingleSelect';
import MultipleSelect from './MultipleSelect'


function FormattedDate(props){
  // let elemntStyle={
  //   visibility: props.style
  // }
  // return <p style={elemntStyle}>Now is {props.date.toLocaleString()}. {props.style}</p>
  if(!props.warn){
    return null
  }
  return (
    <p>Now is {props.date.toLocaleString()}.</p>
  );
}

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li key={numbers.toString()}>{numbers}</li>
);


function Blog(props){
  const sidebar = (
    <ul>
      {props.posts.map((post)=>
        <li key={post.id}>{post.title}</li>
      )}
    </ul>
  );
  const content = props.posts.map((post)=>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
  );
  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  );
}

const posts=[
  {id:1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id:2, title: 'Hello Vue', content: 'Welcome to learn Vue.js'}
]


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: props.date,
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount(){
    this.timerID = setInterval(
      ()=>{this.tick()},
      1000
    )
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  handleClick(){
    console.log(this)
    this.setState(prevState=>({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'visible': 'hidden'}
          </button>
          <FormattedDate warn={this.state.isToggleOn} date={this.state.date}/>
          <Blog posts={posts}/>
          <CheckBox />
          <SingleSelect />
          <MultipleSelect />
        </header>
      </div>
    );
  }
}

export default App;
