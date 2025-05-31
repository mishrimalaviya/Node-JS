import axios, { all } from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

function Edit() {
    var { id } = useParams()
    console.log(id)

    var [editeddata, setediteddata] = useState({
        name: "",
        city: ""
    })
    var navigate = useNavigate()


    useEffect(() => {
        axios.get("http://localhost:2001/showData")
            .then((res) => {
                console.log(res.data.record)
                var da = res.data.record.find((el, i) => {
                    if (el._id == id) {
                        console.log(el)
                        return el
                    }
                })
                setediteddata(da)
            })
    }, [])
    console.log(editeddata)

    function change(e)
    {
        var value = e.target.value
        var name = e.target.name

       setediteddata({...editeddata,[name]: value})
    }
    console.log(editeddata)

    function submitdata(e)
    {
        e.preventDefault()
        axios.put(`http://localhost:2001/edit?id=${id}`,editeddata)
        .then(()=>{
            alert("your data is updated")
            navigate("/View")
        })
    }

    return (
        <>
            <h1>Edit</h1>
            <form onSubmit={submitdata}>
                <input placeholder="enter the name" name="name" type="text" value={editeddata.name} onChange={change} />
                <input placeholder="enter the city" name="city" type="text" value={editeddata.city} onChange={change}/>
                <input type="submit" />
            </form>
        </>
    )
}
export default Edit