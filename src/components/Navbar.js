import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {

    const {state , dispatch }  = useContext(UserContext); 
    const history = useHistory();

    const renderList=()=>{
        if(state){
            return[
                <li className="center contact-Heading"><Link to="/">Helping Hands</Link></li>,
                <li><a className="center smoothscroll" style={{marginLeft:"" , cursor:"pointer"}} href="#about">About</a></li>,
                <li><a className="center smoothscroll" style={{marginLeft:"" , cursor:"pointer"}} href="#contact">Contact</a></li>,
                <li className="center"><Link to="/donate">Donate</Link></li>,
                <li className="right" style={{cursor : "pointer" , marginRight:"10px"}}
                    onClick={() => {
                    localStorage.clear();
                    dispatch({ type: "CLEAR" });
                    history.push("/");
                    }}><i class="material-icons left">logout</i></li>
            ]
        }else{
            return[
                <li className="center contact-Heading"><Link to="/">Helping Hands</Link></li>,
                <li><a className="center smoothscroll" style={{marginLeft:"" , cursor:"pointer"}} href="#about">About</a></li>,
                <li><a className="center smoothscroll" style={{marginLeft:"" , cursor:"pointer"}} href="#contact">Contact</a></li>,
                <li className="right"> <Link to="/signin"><i class="material-icons left">login</i></Link></li>
            ]
        }
    }

    return(
        <div> 
            <nav className="navbar">
                <div className="nav-wrapper">
                    <Link to={state? "/":"/signin"}></Link>
                    <ul id="nav-mobile">
                        {renderList()}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
