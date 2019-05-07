import React from 'react'
import ReactDOM from 'react-dom'
//import './styles.css'
//import classNames from 'classnames'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false
        }
    }
    componentDidMount = () => {
        document.addEventListener('click', this.handleClickOutside, true)
    }

    componentWillUnmount = () => {
        document.removeEventListener('click', this.handleClickOutside, true)
    }
    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }
    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this)

        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                showMenu: false
            })
        }
    }

    render() {
        const showMenu = this.state.showMenu
        // const sidebarClass = classNames({
        //     sidebar: true,
        //     'sidebar-menu-expanded': showMenu,
        //     'sidebar-menu-collapsed': !showMenu
        // })

        // const elementsClass = classNames({
        //     'expanded-element': true,
        //     'is-hidden': !showMenu
        // })

        return (
            <nav >
                <img className="menuIcon" src={'https://png.icons8.com/menu/ffffff'} onClick={this.toggleMenu} />
                <ul>
                    <li>
                        <a className="expandable" href="#" title="Setting">
                            <img src={'https://png.icons8.com/setting/ffffff'} alt="" />
                            <span >Setting</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar