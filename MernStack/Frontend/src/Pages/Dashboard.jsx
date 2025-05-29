import { Link } from "react-router-dom"

function Dashboard() {
    return (
        <>
        <h1>dashboard</h1>
            <Link to={'/'}>Form</Link>
            <Link to={'/view'}>View data</Link>
        </>
    )
}
export default Dashboard