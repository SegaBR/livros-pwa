import { Component } from "react";

class Alerta extends Component {


    render() {
        return (
            <div className={this.props.typeAlert} role='alert'>
                {this.props.msgAlert}
            </div> 
        );
    }

}

export default Alerta;