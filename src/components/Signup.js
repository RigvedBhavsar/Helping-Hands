import React, {useState} from 'react'
import {Link , useHistory} from 'react-router-dom'
import M from 'materialize-css';
import { ReplySharp } from '@material-ui/icons';

const Signup=() =>{

    const history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRepassword] = useState('');
    
    const userSignup =()=>{

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           return M.toast({html:"Invalid Email",classes:"#c62828 red darken-3"})
        }

        if(password.length < 8 && repassword.length < 8)
        {
           return M.toast({html:"Password atleast have length 8",classes:"#c62828 red darken-3"})
        }

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            return M.toast({html:"Password Should contains 1 Character, 1 Capital Letter, 1 Small Letter, 1 Special Character",classes:"#c62828 red darken-3"})
        }

        if(password !== repassword)
        {
           return M.toast({html:"Password Not Matching",classes:"#c62828 red darken-3"})
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
                <input type="password" placeholder="Re-type password" value={repassword} onChange={(e)=>setRepassword(e.target.value)}/>
                                                                                   
                <button style={{marginTop:"30px"}}  className="waves-effect waves-light btn #f57f17 yellow darken-4" onClick={()=>userSignup()}>Signup</button>
                <br/><br/>
                <h6>
                    <Link style={{color:"black"}} to='/signin'>Already have an account ?</Link>
                </h6>
            </div>
        </div>
        </div>
    )
}


export default Signup
