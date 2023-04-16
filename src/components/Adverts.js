import React from 'react';
import Advert from "./Advert";

class Adverts extends React.Component {
    constructor() {
        super();
        this.state = { ads: [] };
    }
    componentDidMount() {
        // fetch ads
    }
    render() {
        return (
            <section className='adverts-slide'>
                {
                    this.state.list.map(element => {
                        <Advert name={element.name} url={element.url} ></Advert>
                    })
                }
            </section >
        );
    }
}

export default Adverts;