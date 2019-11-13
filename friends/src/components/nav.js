import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
	return(
		<nav>
		  <Link to ='/'> Home </Link>
		  <Link to ='/signin'> Log In </Link>
		  <Link to ='/friends'> Friends! </Link>
		</nav>
		)
}

export default Nav; 