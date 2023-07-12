import React from "react";
const Test=(props)=>{
return(
<li className="concept">
<img src={props.parameter.image} alt={props.parameter.title} />
<h2>{props.parameter.title}</h2>
<p>{props.parameter.description}</p>
</li>)

}
export default Test;