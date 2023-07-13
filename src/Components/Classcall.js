import React from 'react';
import '../App.css'
import ClassCom from './Classcom';
import FuncCom from './Functioncom';

class Classcall extends React.Component {
  constructor(){
    super();
    this.state={
      functionClick:false,
      classClick:false
    }
  }
  render()
  {
    return(
    
      <div className='App'>
        <h1 className='topheading'>Styling Using Functional and Class Component</h1>
        <div>
        <button onClick={()=>this.setState({functionClick:!this.state.functionClick})}>To see Styling in functional component</button>
        <button onClick={()=>this.setState({classClick:!this.state.classClick})}>To see Styling in class component</button>
        </div>
        <div className='Box' >
  
            {this.state.classClick && <ClassCom/>}
            {this.state.functionClick && <FuncCom/>} 
       </div>
      </div>
    )
  }
}
export default Classcall

