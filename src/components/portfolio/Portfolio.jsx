import "./Portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Webapp</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/quriocity.png" className="socialImg" alt="" />
          <h3>Design App</h3>
        </div>

        <div className="item">
          <img src="assets/quriocity.png" className="socialImg" alt="" />
          <h3>Design App</h3>
        </div>

        <div className="item">
          <img src="assets/quriocity.png" className="socialImg" alt="" />
          <h3>Design App</h3>
        </div>

        <div className="item">
          <img src="assets/quriocity.png" className="socialImg" alt="" />
          <h3>Design App</h3>
        </div>

        <div className="item">
          <img src="assets/quriocity.png" className="socialImg" alt="" />
          <h3>Design App</h3>
        </div>

        <div className="item">
          <img src="assets/quriocity.png" className="socialImg" alt="" />
          <h3>Design App</h3>
        </div>

        
      </div>
    </div>
  );
}
