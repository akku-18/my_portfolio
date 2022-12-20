import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Genius .</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9560794457</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>akshanshgarg18@gmail.com</span>
          </div>
        </div>
        <div className="right">
          right
        </div>
      </div>
    </div>
  )
}
