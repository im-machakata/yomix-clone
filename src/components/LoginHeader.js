import React from 'react'
// import ReactDOM from 'react-dom'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='login-header'>
                    <span className='text-white'>Yo</span>
                    <span>Mix</span>
                </div>
                <div className='header-gradient'></div>
            </header>
        )
    }
}