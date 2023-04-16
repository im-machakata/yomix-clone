import React from 'react';

class Adverts extends React.Component {
    state = {
        list: [
            {
                name: '',
                id: 1,
                url: ''
            }
        ]
    }
    render() {
        return (
            <section className='adverts-slide'>
                {this.state.list.map(element =>{})}
            </section>
        );
    }
}

export default Adverts;