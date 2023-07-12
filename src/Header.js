import React from "react";
const Header=(props)=>{
return(
<header>
<img src={props.HeaderValueparameter.image} alt={props.HeaderValueparameter.alt} />
<h1>{props.HeaderValueparameter.h1}</h1>
<p>{props.HeaderValueparameter.p}</p>
</header>
)
}
export default Header;