import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Nav";
import { useEffect, useState } from "react";
import axios from "axios";


function Edit() {
    var { id } = useParams()
    var [editdata, setEditData] = useState({
        name: "",
        title: "",
        price: ""
    })
    var navigate = useNavigate()
    useEffect(() => {
        axios.get("http://localhost:4001/ProductForm/ShowData")
            .then((res) => {
                console.log(res.data.record)
                var edit = res.data.record.find((el, i) => {
                    if (el._id == id) {
                        return el
                    }
                })
                setEditData(edit)
            })
    }, [])

    console.log(editdata)

    console.log(id)


    function editDatas(e)
    {
        var value = e.target.value
        var name = e.target.name

        setEditData({...editdata,[name]:value})
    }

    const submitdata =async(e)=>{
        e.preventDefault()
        console.log(editdata)
        await axios.put(`http://localhost:4001/ProductForm/Editdata?id=${id}`,editdata)
        .then(()=>{
            alert("your data is updated")
            navigate("/ShowData")
        })

    }
    return (
        <>
            <Navbar></Navbar>
            <h1>Edit Your Data</h1>
            <form onSubmit={submitdata}>
                <input placeholder="Update your product name" value={editdata.name} onChange={editDatas} name="name"></input>
                <input placeholder="Update your title" value={editdata.title}  onChange={editDatas} name="title"></input>
                <input placeholder="Update your price" value={editdata.price}  onChange={editDatas}name="price"></input>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default Edit