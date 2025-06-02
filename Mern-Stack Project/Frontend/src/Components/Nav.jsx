import { Link } from "react-router-dom"

function Navbar()
{
    return(
        <>
            <Link to={"/Register"}>Register</Link><br></br>
            <Link to={"/Dashboard"}>Dashboard</Link><br></br>
            <Link to={"/Form"}>form</Link><br></br>
            <Link to={"/ShowData"}>Show data</Link><br></br>

        </>
    )
}

export default Navbar