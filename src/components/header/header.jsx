import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span> */}
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/376368/pexels-photo-376368.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
    </div>
  )
}
