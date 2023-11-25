import { useEffect, useState } from "react";

function ShowFetch() {

    const [getData, setGetData] = useState([]);


    useEffect(() => {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d1740373")
            .then((response) => response.json())
            .then((data) => {
                setGetData(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    return (
        <>
            {getData.map((item, index) => (
                <div className="right-content-boxes" key={index} >
                    <img src={item.poster} alt="image" />
                    <h5></h5>
                    <p></p>
                </div>
            ))}

        </>
    )
}

export default ShowFetch;
