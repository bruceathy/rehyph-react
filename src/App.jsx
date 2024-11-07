import "./App.css";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <h1 className="logo">bhaka</h1>
        <ul>
          <li>
            <a
              href="https://cosmic-kheer-381ba4.netlify.app/"
              target="_blank"
            ></a>
          </li>
          <li>
            <a href="html/oneshots.html">One-Shots</a>
          </li>
          <li>
            <a href="./html/music.html">Music</a>
          </li>
          <li>
            <a href="./html/merch.html">Merch</a>
          </li>
          <li>
            <a href="https://www.patreon.com/" target="_blank">
              Patreon
            </a>
          </li>
        </ul>
        <div className="social-media">
          <a
            href="https://twitter.com/breezytresbeau"
            target="_blank"
            rel="noopener"
          >
            <i className="ph ph-x-logo"></i>
          </a>
          <div className="vl"></div>
          <a
            href="https://www.instagram.com/breezytresbeau/"
            target="_blank"
            rel="noopener"
          >
            <i className="ph ph-instagram-logo"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
