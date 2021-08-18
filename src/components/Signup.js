import React, {useState} from 'react'
import {Link , useHistory} from 'react-router-dom'
import M from 'materialize-css';

const Signup=() =>{

    const history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const userSignup =()=>{

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           return M.toast({html:"Invalid Email",classes:"#c62828 red darken-3"})
        }

        fetch("/signup",{
            method :"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html : data.message , classes:"#43a047 green darken-1"})
                history.push('/signin');
            }
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>
            <div className="my-card">
            <div className="card auth-card input-field">
                <h3>SIGN UP</h3>
                <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                                                                   
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={()=>userSignup()}>Signup</button>
                <br/><br/>
                <h6>
                    <Link to='/signin'>Already have an account ?</Link>
                </h6>
            </div>
        </div>
        </div>
    )
}


export default Signup
