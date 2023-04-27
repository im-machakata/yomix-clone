import React from 'react';

class Advert extends React.Component {
    state = {}
    render() {
        return (
            <div className='advert'>
                <h4>{this.props.name}</h4>
                <p>{this.props.url}</p>
            </div>
        );
    }
}

export default Advert;