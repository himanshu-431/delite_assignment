import { useState } from 'react'
import SignIn from '../assets/SignIn_Image.png'
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SignInUser = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Authorization", "Bearer " + Cookies.get("token"));

        var raw = JSON.stringify(
            {
                email:email,
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
            const response = await fetch("https://delite-assignment-backend.vercel.app" + "/user/login", requestOptions);
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
            <img src={SignIn} alt="singIn" style={{width:"700px",height:"660px"}}/>
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"700px"}}>
            <div style={{display:"flex",flexDirection:"column",height:"450px",border:"3px solid #E5E4E2",borderRadius:"15px",width:"90%"}}> 
                <div style={{display:"flex",justifyContent:"space-around"}}>
                    <h1 style={{fontSize:"48px",fontFamily:"sans-serif",fontWeight:"bold"}}>Fill what we know<span style={{color:"red"}}>!</span></h1>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} style={{border:"none",borderBottom:"1px solid grey", margin:"25px 50px",padding:"0px 0px 7px 7px"}}/>
                    <input type="text" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} style={{border:"none",borderBottom:"1px solid grey", margin:"25px 50px",padding:"0px 0px 7px 7px"}}/>
                </div>
                <button onClick={SignInUser} style={{cursor:"pointer",width:"84%",margin:"25px 50px",background:"#3A244A",color:"white",padding:"15px 15px",border:"none",borderRadius:"10px",fontSize:"20px"}}>Sign In</button>
                <Link to="/user/register"><button style={{cursor:"pointer",width:"84%",margin:"2px 50px",color:"#3A244A",padding:"15px 15px",border:"2px solid #3A244A",borderRadius:"10px",fontSize:"20px"}}>Sign Up</button></Link>
            </div>
        </div>
    </div>
  )
}

export default LogIn;
