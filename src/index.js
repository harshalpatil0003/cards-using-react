import ReactDom from "react-dom/client";
import './style.css'
import MovieCards from "./component"

const root = ReactDom.createRoot(document.getElementById("root"))


root.render(<>
    <div className="card">
        <MovieCards
            name="John Wick"
            category="Action"
            url="https://m.media-amazon.com/images/S/pv-target-images/6c2c7ace999b2efa7d6d113f7f3ec49f83722dbd2a22b202ef8028f26a1d0b69.jpg"
            duration=" 1h 41m" />

        <MovieCards
            name="Interstellar"
            category=" Sci-fi/Adventure"
            url="https://images-cdn.ubuy.co.in/636c6d63d6eef30f6307a004-movie-interstellar-classic-movie-poster.jpg"
            duration="  2h 49m" />

        <MovieCards
            name="The Dark Knight"
            category="Action/Crime"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiu894lVgar_r93PRj76hRvd5Z-UoST-ETbFC8I-GxdNfh-UES5N_tWsqON7v3A37tw-E&usqp=CAU"
            duration="2h 32m" />

        <MovieCards
            name="Dune"
            category="Sci-fi/Adventure"
            url=""
            duration=" 2h 46m" />

        <MovieCards
            name="Inception"
            category=" Sci-fi/Action"
            url=""
            duration=" 2h 28m" />
    </div>
</>


)