/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import './index.styl'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            links: [
                {
                    name: 'cart',
                    path: '/cart',
                },
                {
                    name: 'home',
                    path: '/home',
                },
            ],
            menuVisible: false,
        }
    }

    getLinksListTemplate() {
        const { links } = this.state
        return links.map((link, id) => {
            return (
                <Link key={id} className="sidebar__link" to={ link.path }>{ link.name }</Link>
            )
        })
    }


    clickHandler(event) {
        console.log(event)
        this.setState({
            menuVisible: !this.state.menuVisible,
        })
    }

    render() {
        const menuItems = this.getLinksListTemplate()
        console.log(menuItems)
        return (
            <div className="sidebar">
                <div className="sidebar-btn" style={this.sidebarBtnStyle} onClick={this.clickHandler.bind(this)}> &#x2630; </div>
                { this.state.menuVisible ? menuItems : null }
            </div>
        )
    }
}