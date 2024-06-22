import React, { useState } from 'react'
import SignUP from '../assets/SignUp_Image.png'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SignUpUser = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization", "Bearer " + Cookies.get("token"));

        var raw = JSON.stringify(
            {
                email:email,
                firstName:firstName,
                lastName:lastName,
                password:password
            }
        );

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch("https://delite-assignment-backend.vercel.app" + "/user/register", requestOptions);
            navigate('/');
            // return responseChecker(response)
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center" ,height:"95vh"}}>
            <div>
                <img src={SignUP} alt="singUp" style={{width:"700px",height:"660px"}}/>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"700px"}}>
                <div style={{display:"flex",flexDirection:"column",height:"660px",border:"3px solid #E5E4E2",borderRadius:"15px",width:"90%"}}> 
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <h1 style={{fontSize:"48px",fontFamily:"sans-serif",fontWeight:"bold"}}>Let us know<span style={{color:"red"}}>!</span></h1>
                        <Link to="/user/login"><h2 style={{fontFamily:'sans-serif',marginTop:"48px",cursor:"pointer",textDecoration:"underline"}}>Sign <span style={{color:"red"}}>in</span></h2></Link>
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <input type="text" placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} style={{border:"none",borderBottom:"1px solid grey", margin:"25px 50px",padding:"0px 0px 7px 7px"}}/>
                        <input type="text" placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} style={{border:"none",borderBottom:"1px solid grey", margin:"25px 50px",padding:"0px 0px 7px 7px"}}/>
                        <input type="text" placeholder='Set Password' value={password} onChange={e => setPassword(e.target.value)} style={{border:"none",borderBottom:"1px solid grey", margin:"25px 50px",padding:"0px 0px 7px 7px"}}/>
                        <input type="text" placeholder='Retype Password'   style={{border:"none",borderBottom:"1px solid grey", margin:"25px 50px",padding:"0px 0px 7px 7px"}}/>
                        <input type="text" placeholder='Contact Mode' style={{border:"none",borderBottom:"1px solid grey", margin:"25px 50px",padding:"0px 0px 7px 7px"}}/>
                        <input type="text" placeholder='Enter Email' value={email} onChange={e => setEmail(e.target.value)} style={{border:"none",borderBottom:"1px solid grey", margin:"25px 50px",padding:"0px 0px 7px 7px"}}/>
                    </div>
                    <button onClick={SignUpUser} style={{cursor:"pointer",width:"84%",margin:"5px 50px",background:"#3A244A",color:"white",padding:"15px 15px",border:"none",borderRadius:"10px",fontSize:"20px"}}>Sign Up</button>
                </div>
            </div>
    </div>
  )
}

export default SignUp
