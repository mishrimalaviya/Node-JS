import { Route, Routes } from "react-router-dom"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Dashboard from "../Pages/Dashboard"
import Form from "../Pages/Form"
import ShowData from "../Pages/ShowData"
import Edit from "../Pages/Edit"

function Rout()
{
    return(
        <>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/Register" element={<Register></Register>}></Route>
                <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
                <Route path="/Form" element={<Form></Form>}></Route>
                <Route path="/ShowData" element={<ShowData></ShowData>}></Route>
                <Route path="/edit/:id" element={<Edit></Edit>}></Route>
            </Routes>
        </>
    )
}

export default Rout