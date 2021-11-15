import React , {useContext} from 'react'
import {UserContext} from '../App';
import {Link} from 'react-router-dom';
const Home=() =>{

    const {state , dispatch} =useContext(UserContext);

    const renderButton = () => {
        if (state) {
            return [
                <a className="waves-effect waves-light btn-large #f57f17 yellow darken-4 home-button">
                    <Link style={{ color: "white" }} to="/donate">Donate</Link></a>,
                // <a className="waves-effect waves-light btn-large #f57f17 yellow darken-4 home-button">
                //     <Link style={{ color: "white" }} to="/products">Buy Products</Link></a>,
            ]
        }
        else {
            return [
                <a class="waves-effect waves-light btn-large #f57f17 yellow darken-4 home-button">
                    <Link style={{ color: "white" }} to="/signup">Register</Link></a>,
            ]
        }
    }

    return (
        <div className="home">
            <div style={{ marginTop: "250px" }}>
                <h1 style={{ color: "white", height: "55px" }}>NEED A NEW LOOK ?</h1>
                <h4 style={{ color: "white" }} >WE ARE YOUR SOLUTION</h4>
                <h5>We Want To Be Your Destination For Great Beauty</h5>
            </div>
            <div style={{ marginTop: "100px" }}>
                <ul>
                    {renderButton()}
                </ul>
            </div>

        </div>
    )
    
    
    
    
   
}

export default Home
