import React from 'react';
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <section>
                    <div>
                        <NavLink to="/allbeers">
                            <div
                                className='ui raised verry padded text container segment'
                                style={{ marginTop: '80px' }}
                            >
                                <a class="ui card">
                                    <div class="content">
                                        <div class="header">Show all</div>
                                    </div>
                                </a>
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/RandomBeerSingleView">
                            <div
                                className='ui raised verry padded text container segment'
                                style={{ marginTop: '80px' }}
                            >
                                <a class="ui card">
                                    <div class="content">
                                        <div class="header">random</div>
                                    </div>
                                </a>
                            </div>
                        </NavLink>
                    </div>
            </section>
        );
    }
}

export default Home;