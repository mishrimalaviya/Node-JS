import { useEffect } from "react"
import Navbar from "../Components/Nav"
import axios, { all } from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

function ShowData() {
    var [alldata, setdata] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4001/ProductForm/ShowData")
            .then((da) => {
                console.log(da)
                setdata(da.data.record)
            })
    }, [])
    console.log(alldata)
    const deleteData = async (id) => {
        console.log(id)
        await axios.delete(`http://localhost:4001/ProductForm/Delete?id=${id}`)
            .then(() => {
                var del = alldata.filter((el, i) => {
                    console.log(el._id)
                    if (el._id != id) {
                        return el
                    }
                })
                setdata(del)

            })
    }

    return (
        <>
            <Navbar></Navbar>
            <h1>Showdata</h1>
            {
                alldata.map((el, i) => {
                    return <><h3>{el.name}</h3>
                        <p>{el.title}</p>
                        <p>{el.price}</p>
                        <Link to={`/edit/${el._id}`}><button>edit</button></Link>
                        <button onClick={() => deleteData(el._id)}>delete</button>

                    </>
                })
            }
        </>
    )
}
export default ShowData