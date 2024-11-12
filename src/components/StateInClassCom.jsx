import react,{Component} from 'react';

class StateInClassCom extends Component {
    constructor(){
        super();
        this.state = {
            name : 0
        }
    }
    update(){
        this.setState({name : this.state.name+1})
    }
    render(){
        return(
            <div>
                <h2>{this.state.name}</h2>
                <button onClick={()=>this.update()}>update</button>
            </div>
        )
    }

}

export default StateInClassCom;