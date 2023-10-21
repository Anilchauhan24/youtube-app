import { useEffect, useState } from "react";

function Fatal() {


    const [data, setData] = useState([]);




    useEffect(() => {

        async function getData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const call = await res.json();
            console.log(call);
            setData(call);
        }

        getData();


    }, [])


    return (
        <>
            {data.map((e, i) => {
                return <h2 key={i}>{e.title}</h2>
            })}


        </>
    )
}
export default Fatal;