import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header>
                <div id="left-section-header">
                    <div>
                        <ul>
                            <li id="logo">EDYODA</li>
                            <li id="story">Stories</li>
                        </ul>
                    </div>
                    <ul id="cata">
                        <li>Explore</li>
                        <li>Catagories  <i className='fa fa-angle-down'></i></li>

                    </ul>

                    <div>

                    </div>
                </div>
                <div id="right-section-header">
                    <div>
                    <p className="BlogNavigationLinks_EdyodaText_11wl2">Edyoda is free learning and knowledge <br /> sharing platform for techies</p>
                    </div>
                    <div>
                       <button className="Button_Button_QI7b2">Go to Main Website</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header