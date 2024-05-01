import React from "react";
// import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import '../sidebar.css'
// import Entertainment from "./Entertainent";
import Entertainment from "./Entertainment";


const arr = [
    {id:1, name:'All', Link : '/' },
    {id:2, name:'Entertainment', Link : '/entertainment'},
    {id:3, name:'Technology', Link : '/technology'},
    {id:4, name:'Commerce', Link : '/Commerce'},


];







class Sidebar extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid sidebar">
             <h2>Categories</h2>
<ul>
{arr.map((item,index)=>(

     <li key={item.id}>
        <a href={item.Link} className="listing">
    {item.name}
    </a>
 </li>


))}
    {/* <li>
        <Link to='/' className="all">All</Link>
    </li>
    <li>
        <Link to='/Entertainment'className="entertainment">Entertainment</Link>
    </li>
    <li>
        <Link to='Technologies'className="technologies">Technologies</Link>
    </li> */}
</ul>
<button>Article</button>
</div>
</div>



        )
    }
}





export default Sidebar;