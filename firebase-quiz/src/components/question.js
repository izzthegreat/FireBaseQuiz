import React from 'react'
import '../css/quiz.css'


class Question extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <li>
                {this.props.question}<br/>
                <input type='radio' name={this.props.id} value='a'/>A. {this.props.a}<br/>
                <input type='radio' name={this.props.id} value='b'/>B. {this.props.b}<br/>
                <input type='radio' name={this.props.id} value='c'/>C. {this.props.c}<br/>
                <input type='radio' name={this.props.id} value='d'/>D. {this.props.d}<br/>
            </li>
        )
    }
}

export default Question