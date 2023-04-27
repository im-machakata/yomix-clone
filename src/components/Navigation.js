import React from 'react'
// import ReactDOM from 'react-dom'

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="navigation">
                <ul className="nav-list">
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Buy</a>
                    </li>
                    <li>
                        <a href='/'>Send</a>
                    </li>
                </ul>
            </nav>
        )
    }
}