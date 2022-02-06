import "./App.css";
import Banner from "./Comps/banner/Banner";
import Navbar from "./Comps/navbar/Navbar";
import Row from "./Comps/Rows/Row";
import requests from "./requests";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Banner url={requests.fetchTrending} />
      </div>
      <div>
        <Row
          title="Netflix Originals"
          url={requests.fetchNetflixOriginals}
          key="1"
        />
        <Row title="Trending" url={requests.fetchTrending} key="2" />
        <Row title="Top Rated" url={requests.fetchTopRated} key="3" />
        <Row title="Action Movies" url={requests.fetchActionMovies} key="5" />
        <Row title="Comedy Movies" url={requests.fetchComedyMovies} key="6" />
        <Row title="Horror Movies" url={requests.fetchHorrorMovies} key="7" />
        <Row title="Romance Movies" url={requests.fetchRomanceMovies} key="8" />
      </div>
    </div>
  );
}

export default App;
