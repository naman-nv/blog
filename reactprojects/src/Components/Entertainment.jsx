import React from "react";
// import { Link } from "react-router-dom";


const arr2=[
    {id:1,name:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sunt asperiores facilis quos fuga dolorum harum! Assumenda odit debitis, minus, et velit sint vero reiciendis ducimus tenetur, deserunt explicabo quisquam!',Link:'/technology'}
]




class Entertainment extends React.Component{
    render(){
        return(
<div className="mainbar">
<ul>
   {arr2.map((item,index)=>
<li key={item.id}>
    {item.name}
</li>
)}
</ul>
</div>
        )
    }


}
export default Entertainment;