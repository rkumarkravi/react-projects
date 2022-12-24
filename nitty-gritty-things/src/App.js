import logo from "./logo.svg";
import "./App.css";
import ThemeToggle from "./components/theme-toggle/ThemeToggle";
import GotoTop from "./components/GotoTop/GotoTop";
import ResponsiveNavBar from "./components/responsive-nav-bar/ResponsiveNavBar";
function App() {
  return (
    <div className="App">
      <ResponsiveNavBar
        logoname="Comp Name"
        homepage="http://www.google.com"
        imgSrc="https://cdn.educba.com/academy/wp-content/uploads/2020/05/cropped-website_logo_transparent_background_white.png.webp"
        menus="menu1,menu2,menu3,menu4,menu5"
      />
    </div>
  );
}

export default App;
