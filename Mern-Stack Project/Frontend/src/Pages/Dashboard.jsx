import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Nav"
import { useEffect } from "react"

function Dashboard() {
    var navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/")
        }
    },[])

    return (
        <>
            <Navbar></Navbar>
            <h1>Dashbaord</h1>
            <button onClick={()=>{localStorage.removeItem("token");navigate("/")}}>logout</button>
        </>
    )
}

export default Dashboard