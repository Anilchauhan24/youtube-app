import "./Header.css";
import ShowFetch from "../../ShowFetch";
import React, { Component } from 'react';


const url = "http://www.omdbapi.com/?i=tt3896198&apikey=d1740373";
class Header extends Component {

    constructor() {
        super();
        this.state = {
            video: '',
        }
    }



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
                    <ShowFetch getData={this.state.video} />

                </div>

            </div>
        );
    }

    componentDidMount() {
        fetch(`${url}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ video: data })
                console.log(data)
            })
    }
}

export default Header;