import "./Topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar "+(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Genius.</a>
          <div className="itemContainer">
            <img src="assets/person.png" alt="" />
            <span>+91 9560794457</span>
          </div>
          <div className="itemContainer">
            <img src="assets/mail.png" alt="" />
            <span>akshanshgarg18@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
