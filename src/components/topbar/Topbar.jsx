import "./Topbar.css"
import { Link } from "react-router-dom";

export default function Topbar() {
  const user=true;
  return (
    
    <div className='topb'>
      <div className="topLeft">
        <i class="topIcon fa-brands fa-facebook "></i>
        <i class="topIcon fa-brands fa-twitter "></i>
        <i class="topIcon fa-brands fa-instagram "></i>
        <i class="topIcon fa-brands fa-whatsapp "></i>
        <i class="topIcon fa-brands fa-pinterest "></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem"><Link className="link" to="/">
              HOME
            </Link>
            </li>
            <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem"> <Link className="link" to="/write">
              WRITE
            </Link>
            </li>
            {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
      {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}
