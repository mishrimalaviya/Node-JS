import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Nav"

import { useEffect } from "react"
import axios from "axios"

function Dashboard() {
    var navigate = useNavigate()
    // now see je token localstorage ma store che ee token ne aapde backend ma send karsu if token hoi ne toh else ma toh aana mate first function through send karsu 
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/")
        }
        else{
            tokenfetch()
        }
    },[])

    function tokenfetch()
    {
        let token = localStorage.getItem("token")
        console.log(token)

        // hve ee token ne axios throught middleware ma moklsu Headers authorization ma 
        axios.get("http://localhost:4001/addAdmin",{
            headers :{
                Authorization : token
            }
        }).then((res)=>{
            console.log(res)
        })

    }

    return (
        <>
            <Navbar></Navbar>
            <h1>Dashbaord</h1>
            <button onClick={()=>{localStorage.removeItem("token");navigate("/")}}>logout</button>
        </>
    )
}

export default Dashboard