import { useState } from "react"
import Navbar from "../Components/Nav"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Changepassword() {
    var [state, setstate] = useState({
        oldpassword: "",
        newpassword: "",
        confirmpassword: ""
    })
    var navigate = useNavigate()

    function changepassword(e) {
        var value = e.target.value
        var name = e.target.name

        setstate({ ...state, [name]: value })
    }
    console.log(state)
    function submitemail() {
        let token = localStorage.getItem("token")
        console.log(token)

        axios.post("http://localhost:4001/ChangePassword", state, {
            headers:
            {
                Authorization: token
            }
        })
            .then((res) => {
                console.log(res)
                localStorage.removeItem("token")
                alert("Your password has been changed")
                navigate("/")
            })

        setstate({
            oldpassword: "",
            newpassword: "",
            confirmpassword: ""
        })
    }
    return (
        <>
            <Navbar></Navbar>
            <h1>Change Your login password</h1>
            <input placeholder="enter the old password" onChange={changepassword} name="oldpassword"></input>
            <input placeholder="enter the new password" onChange={changepassword} name="newpassword"></input>
            <input placeholder="enter the confirm password" onChange={changepassword} name="confirmpassword"></input>
            <input type="submit" onClick={submitemail}></input>

        </>
    )
}
export default Changepassword