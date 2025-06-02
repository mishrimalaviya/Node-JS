import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {
    var [loginobj, setloginobj] = useState({
        email: "",
        password: ""
    })
    var navigate = useNavigate()

    function change(e) {
        var name = e.target.name
        var value = e.target.value

        setloginobj({ ...loginobj, [name]: value })
    }



    const submitdata = async (e) => {
        e.preventDefault()

        console.log(loginobj)
        await axios.post("http://localhost:4001/login", loginobj)
            .then((res) => {
                console.log(res)
                if (res.data.code == 100) {
                    alert(res.data.msg)
                    navigate("/Register")
                }
                else if (res.data.code == 200) {
                    console.log(res.data.token)
                    localStorage.setItem("token",res.data.token)
                    alert(res.data.msg)
                    navigate("/Dashboard")
                }
                else 
                {
                    console.log(res.data.code)
                    alert(res.data.msg)
                    navigate("/")
                }

            })
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={submitdata} >
                <input placeholder="enter the email" onChange={change} name="email"></input>
                <input placeholder="enter the pasword" onChange={change} name="password"></input>
                <input type="submit"></input>
            </form><br></br>
            <Link to={'/Register'}>Register Page</Link>
        </>
    )
}

export default Login