import Header from "../../components/header/header";
import Posts from "../../components/postes/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css"

export default function Home() {
  return (
   <>
    <Header/>
    <div className="home">
        <Posts/>
        <Sidebar/>

    </div>
   </>
  )
}
