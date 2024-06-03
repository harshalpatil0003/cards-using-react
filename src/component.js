import './style.css'

const MovieCards=({ name, url, category, duration })=> {
    return (
            <div className="cards">
                <img src={url} className="poster" alt="poster" />
                <h2>{name}</h2>
                <h4>Category: {category}</h4>
                <h4 className='duration'>Duration:{duration}</h4>
            </div>
    )
}
export default MovieCards;