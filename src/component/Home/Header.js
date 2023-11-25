import "./Header.css";
import ShowFetch from "../../ShowFetch";
import React, { Component } from 'react';



class Header extends Component {




    render() {
        return (
            <div className="container">
                <div className="left">

                    <i class="fa-solid fa-list-ul"></i>  <img id="logo" src="Assets/ylogo.jpg" alt="youtubelogo" />YouTube

                    <div className="header-button">
                        <div className="Home">
                            <i class="fa-solid fa-house"></i><button type="button" className='button btn-light'>Home</button>
                        </div>
                        <div className="s horts">
                            <i class="fa-solid fa-film"></i> <button type="button" className='button btn-light'>Shorts</button>
                        </div>
                        <div className="Subscription">
                            <i class="fa-solid fa-film"></i><button type="button" className='button btn-light'>Subscription</button>
                        </div>
                        <br />
                        <div className="line"></div>
                        <br />
                    </div>


                </div>
                <div className="right">
                    <div className="right-content">

                        <input id='inp' type="text" placeholder="search" />
                        <i class="fa-solid fa-magnifying-glass"></i>

                        <i class="fa-solid fa-microphone"></i>
                        <div className="icons">
                            <i class="fa-solid fa-video"></i>
                            <i class="fa-solid fa-bell"></i>
                        </div>
                        <br></br>
                        <hr />
                    </div>
                    <div className="right-contents">
                        <ShowFetch />

                    </div>
                </div>

            </div>
        );
    }


}

export default Header;