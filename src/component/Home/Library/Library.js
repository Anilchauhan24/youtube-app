import "./Library.css";
import { Component } from "react";
export default class Library extends Component {



    render() {
        return (
            <div className="library container">
                <p className="h3">Library></p>

                <div className="channel"><i class="fa-regular fa-address-card"></i><button type="button" className="button " >Your Channel</button></div>
                <div className="channel"><i class="fa-solid fa-clock-rotate-left"></i> <button type="button" className="button ">History</button></div>
                <div className="channel"><i class="fa-solid fa-clapperboard"></i><button type="button" className="button ">Your Videos</button></div>
                <div className="channel"><i class="fa-regular fa-clock"></i><button type="button" className="button ">Watch Later</button> </div>
                <div className="channel"><i class="fa-regular fa-thumbs-up"></i> <button type="button" className="button " >Liked Videos</button></div>
                <br />
                <div className="line"></div>
                <br />
            </div>

        )
    }
}
