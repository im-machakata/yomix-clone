import React from 'react'
// import ReactDOM from 'react-dom'

// assets
import logo from '../assets/logo.svg';

export default class Header extends React.Component {
    render() {
        return (
            <header className='nav-header'>
                <nav className="nav-bar">
                    <img src={logo} alt='' className='nav-image' />
                    <h4 className='nav-brand-name'>Yomix</h4>
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
            </header>
        )
    }
}