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
            <div style={{ marginTop: "200px" }}>
                <h4 className="home-Content" >Happiness is not so much in having as Sharing.</h4>
                <h4 className="home-Content" >We make a living by what we get,</h4>
                <h4 className="home-Content" >but we make a life by what we give.</h4>
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
