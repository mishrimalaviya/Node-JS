import { useState } from "react"
import Navbar from "../Components/Nav"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Form() {
    var [product, setproduct] = useState({
        name: "",
        title: "",
        price: ""
    })

    var navigate = useNavigate()

    function datas(e) {
        var value = e.target.value
        var name = e.target.name

        setproduct({ ...product, [name]: value })
    }

    const productSubmit = async (e) => {
        e.preventDefault()
        console.log(product)
        await axios.post("http://localhost:4001/ProductForm", product)
            .then((res) => {
                console.log(res.data)

            })
        setproduct({
            name: "",
            title: "",
            price: ""
        })
        
        navigate("/ShowData")

    }
    return (
        <>
            <Navbar></Navbar>
            <h1>Product Form</h1>
            <form onSubmit={productSubmit}>
                <input placeholder="enter the product name" onChange={datas} name="name" value={product.name}></input>
                <input placeholder="enter the Title" onChange={datas} name="title" value={product.title}></input>
                <input placeholder="enter the price" onChange={datas} name="price" value={product.price}></input>
                <input type="submit"></input>

            </form>
        </>
    )

}

export default Form