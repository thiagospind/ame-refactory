import React, {Component} from "react";

export default class Button extends Component {

    render(){

        return (
            <div className="text-center mt-3 pt-3">
                <button className="btn btn-outline-warning" onClick={() => this.props.next()}>
                    Next
                </button>
            </div>
        )
    }
}
