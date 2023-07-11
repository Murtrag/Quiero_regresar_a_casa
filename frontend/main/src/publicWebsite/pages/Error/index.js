import string from  "strings/error";
import { frontendURL } from "urls";
import { Link } from "react-router-dom";



import "assets/customCSS/error.css";
const Error = ()=>{
// <form class="notfound-search">
// 	<input type="text" placeholder="Search..." />
// 	<button type="button">Search</button>
// </form>
return	(
<div id="notfound">
	<div class="notfound-bg"></div>
	<div class="notfound">
		<div class="notfound-404">
			<h1>404</h1>
		</div>
		<h2>{string.window.notFound}</h2>
		<div class="notfound-social">
			<a href="#"><i class="fa fa-facebook"></i></a>
			<a href="#"><i class="fa fa-twitter"></i></a>
			<a href="#"><i class="fa fa-pinterest"></i></a>
			<a href="#"><i class="fa fa-google-plus"></i></a>
		</div>
		<Link to="/" >{string.window.redirect}</Link>
	</div>
</div>)
}

export default Error;
