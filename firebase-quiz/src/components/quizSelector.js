import React from 'react'
import { database } from '../router'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'



class QuizSelector extends React.Component {
    constructor(){
        super()
        this.state={
            quizNames:[],
            deleteQuizPrompt: this.deleteQuizPrompt.bind(this),
            deleteQuiz: this.deleteQuiz.bind(this),
            handleEdit: this.handleEdit.bind(this),
            route: <div id='redirect'/>
        }
    }
    componentDidMount() {
        let data = database.ref('quizzes/quizNames/')
        data.on('value', snapshot => {
            let quizNames = snapshot.val()
            console.log(quizNames)
            this.setState({
                quizNames: quizNames
            })
        })
    }

    deleteQuizPrompt(quiz){
        if (window.confirm(`Are you sure you want to delete ${quiz}?`)){
            this.state.deleteQuiz(quiz)
            window.alert(`${quiz} has been deleted.`)
        }   
    }

    deleteQuiz(quiz){
        database.ref(`quizzes/quizNames/${quiz}`).set(null)
        database.ref(`quizzes/${quiz}`).set(null)
    }

    handleEdit(quizName) {
        let data = database.ref(`quizzes/${quizName}/`)
        data.once('value', (snapshot) => {
            this.setState({
                route:
                    <Redirect to = {
                        { pathname: '/edit',
                            state: {
                                name: quizName,
                                desc: this.state.quizNames[quizName].desc,
                                auth: this.state.quizNames[quizName].author,
                                quiz: snapshot.val()
                            }
                        }
                    } />
            })
            console.log (this.state.route)
        })
    }

    render() {
        let route = this.state.route
        return(
            <div className ="Component-Bg">

                <div className ="quizsel">
                    <h1>
                    Choose a quiz!
                    </h1>
                </div>
                <div className="quizlist">
                    <nav>
          {Object.keys(this.state.quizNames).map((name) => {
                            return(
                                <div className="quizname">
                                    <Link to={`/quiz/${encodeURIComponent(name)}`} id={name}>
                                        {name}
                                    </Link> <br/>
                                    <span className='author'> by {this.state.quizNames[name].author}</span>
                                    <p>{this.state.quizNames[name].desc}</p>
                                    <input type='button'className="btn btn-danger" readOnly value='Delete' onClick={()=>this.state.deleteQuizPrompt(name)} />
                                    <input type= "button" className= "btn btn-warning" value='Edit' onClick={()=>this.state.handleEdit(name)}/>
                                    {route}
                                </div>
                            )
                        })}
                    </nav>
                </div>
            </div>

            
        )
    }
} 

function mapStateToProps(state) {
    return{
        score: state.score
    }
}

function mapDispatchToProps(dispatch){
    return{
        testFunction: () => {
            const action = {
                type: 'TEST'
            }
            dispatch (action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizSelector)