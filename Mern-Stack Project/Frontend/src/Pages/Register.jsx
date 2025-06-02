import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
function Register()
{
    var [obj,setobj]=useState({
        name : "",
        email :"",
        password :""
    })
    var navigate = useNavigate()
    function datachange(e)
    {
        var value = e.target.value
        var name = e.target.name

        setobj({...obj,[name]:value})
    }


   const submitData = async(e)=>{
        e.preventDefault()
        console.log(obj)
        await axios.post("http://localhost:4001/Register",obj)
        .then((res)=>{
            console.log(res.data.users)
            alert(res.data.msg)
            navigate("/")         
        })

        setobj({
            name :"",
            email:"",
            password:""
        })
   }


    return(
        <>
            <h1>Register</h1>
            <form onSubmit={submitData}>
                <input placeholder="Enter Your name" onChange={datachange} name="name" value={obj.name}></input>
                <input placeholder="Enter Your email" onChange={datachange} name="email" value={obj.email}></input>
                <input placeholder="Enter Your password" onChange={datachange} name="password" value={obj.password}></input>
                <input type="submit"></input>
            </form>
            <br></br>
            <Link to={'/'}>Login Page</Link>

        </>
    )
}

export default Register