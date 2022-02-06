import React, { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [navBG, showNavBG] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        showNavBG(true);
      } else {
        showNavBG(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div
      className="navbar"
      style={{ backgroundColor: navBG ? "#1f1f2aa4" : "transparent" }}
    >
      <img
        className="branding__image"
        alt="NETFLIX_CLONE"
        src="https://th.bing.com/th/id/R.3483cbba02fe083b87330a99857f59ed?rik=ejgwaTp6m0Dv6g&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f05%2fNetflix-Logo.png&ehk=gJbypm3nuRFxW%2fGn3WbaXOcTVq6kNgynGml%2fdXD79fM%3d&risl=&pid=ImgRaw&r=0"
      />
    </div>
  );
}

export default Navbar;
