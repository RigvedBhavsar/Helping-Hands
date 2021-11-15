import React, {useState , useContext } from 'react'
import {Link , useHistory} from 'react-router-dom'
import {UserContext} from '../App';
import M from 'materialize-css';


const Signin = () => {
  
    const {state , dispatch }  = useContext(UserContext); 

    const history = useHistory();
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const userLogin =()=>{

        fetch("/login",{
            method :"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.error){
                M.toast({html: data.error , classes:"#c62828 red darken-3"})
            }
            else{
                localStorage.setItem("jwt",data.token);
                localStorage.setItem("user",JSON.stringify(data.user));
                dispatch({type:"USER", payload :data.user})
                M.toast({html : "Successfully Logged in!" , classes:"#43a047 green darken-1"})
                history.push('/');
            }
        }).catch(err=>{
            console.log(err);
        })
    }


    return (
        <div className="my-card">
            <div className="card auth-card input-field">
                <h3>SIGN IN</h3>
                <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button style={{marginTop:"30px"}} className="waves-effect waves-light btn #f57f17 yellow darken-4" onClick={()=>userLogin()}>Login</button>
                <br/><br/>
                <h6>
                    <Link style={{color:"black"}} to='/signup'>Don't have an account ?</Link>
                </h6>
            </div>
        </div>
    )

}

export default Signin
