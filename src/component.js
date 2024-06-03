

function MovieCards({ name, url, category, duration }) {
    return (
        <div>
            <div className="cards">
                <img src="{url}" className="poster" alt="poster" />
                <h3>{name}</h3>
                <h4>Category: {category}</h4>
                <h4>Duration:{duration}</h4>
            </div>
        </div>
    )
}
export default MovieCards;