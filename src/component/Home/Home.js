import Subscription from "./Library/Subscription/Subscription";
import "./Home.css";
import Library from "./Library/Library";
import Fatal from "../../Fatal";
import Header from "./Header";
function Home() {

    return (
        <>
            <div className="body-container">



                <Header />
                <Library />
                <Subscription />

                <Fatal />

            </div>
        </>
    )
}

export default Home;