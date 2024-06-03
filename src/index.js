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
            url="https://www.tallengestore.com/cdn/shop/products/INST4_1_3f6df034-aff3-40d3-ba58-38ad5a0a5586.jpg?v=1569292609"
            duration="  2h 49m" />

        <MovieCards
            name="The Dark Knight"
            category="Action/Crime"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiu894lVgar_r93PRj76hRvd5Z-UoST-ETbFC8I-GxdNfh-UES5N_tWsqON7v3A37tw-E&usqp=CAU"
            duration="2h 32m" />

        <MovieCards
            name="Dune"
            category="Sci-fi/Adventure"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5lbyRQB-2B0GN427FiKSIhw_4utzfQBJhmGkBE7ALro7hmTuAT7j8SrfSJm2xlvDLKQ&usqp=CAU"
            duration=" 2h 46m" />

        <MovieCards
            name="Inception"
            category=" Sci-fi/Action"
            url="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7825626_p_v8_ae.jpg"
            duration=" 2h 28m" />

        <MovieCards
            name="Top Gun: Maverick"
            category="  Action/Adventure"
            url="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
            duration=" 2h 13m" />

        <MovieCards
            name="Extraction"
            category="  Action/Thriller"
            url="https://image.tmdb.org/t/p/original/6ht5v2qdyfxVeHIAbM19SRlypXp.jpg"
            duration="  1h 56m
            " />

        <MovieCards
            name="Venom"
            category=" Sci-fi/Action"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-lVYDx9TktRCZL4KgQSGdnYK5pNuEK6U7ZG0rbRvL3FIXVa6fNS1F0QQ0NcaBqx9NKY&usqp=CAU"
            duration=" 1h 52m
            " />

        <MovieCards
            name="Oppenheimer"
            category=" Thriller/Historical drama"
            url="https://www.postersplug.com/cdn/shop/products/oppenheimer-movie-poster-113945.jpg?v=1692902182"
            duration=" 3 hours
            " />

        <MovieCards
            name="Ghostbusters"
            category=" Comedy/Action"
            url="https://m.media-amazon.com/images/M/MV5BNGYzNDM0M2QtZDFkNy00OTI2LWIyNjctNjNhNDM5Zjk3NzU2XkEyXkFqcGdeQXVyNjQ3MDg0MTY@._V1_.jpg"
            duration=" 1h 56m
            " />


    </div>
</>


)