import React from 'react'
// import ReactDOM from 'react-dom'

export default class Header extends React.Component {
    render() {
        return (
            <header className='app-header'>
                <div className='header-item'>Menu</div>
                <div className='header-item'>Yomix</div>
                <div className='header-item d-none'>Yomix</div>
            </header>
        )
    }
}