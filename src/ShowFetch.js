function ShowFetch(props) {

    const newShow = ({ getData }) => {
        console.log(getData)
        if (getData) {

        }

    }
    return (
        <div>

            <p>{newShow(props)}</p>

        </div>
    )
}
export default ShowFetch;