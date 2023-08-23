import Navbar from "../component/Navbar";
import Bootcamp from "../component/Bootcamp";
function Home (){
return(
    <>
    <Navbar/>
    <Bootcamp
    bootcampname = "JavaScript bootcamp"
    date = "02/11/2021"
    duration = {3 + "weeks"}
    
    />
    <h1>Home page</h1>
    </>
)
}

export default Home;