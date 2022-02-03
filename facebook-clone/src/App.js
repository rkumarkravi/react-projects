import "./App.css";
import Header from "./Comps/Header/Header";
import Sidebar from "./Comps/Sidebar/Sidebar";
import Feeds from "./Comps/Feeds/Feeds";
import Ads from "./Comps/Ads/Ads";
import { useStateValue } from "./StateProvider";
import Login from "./Comps/Login/Login";

function App() {
  const [{user},dispatch]=useStateValue();
  
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feeds />
            <Ads />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
