import { useState } from "react"
import axios from 'axios';

function Form() {
    let [state, setstate] = useState({
        name: "",
        city: ""
    })

    function da(e) {
        let name = e.target.name
        let value = e.target.value

        setstate({ ...state, [name]: value })
    }

    function submitData(e) {
        e.preventDefault()
        
        axios.post("http://localhost:2001/addData",state)
        .then((res)=>{
            console.log(res)
        })

        setstate({
            name :"",
            city:""
        })

    }

    return (
        <>
            <form onSubmit={submitData}>
                <input placeholder="enter the name" name="name" type="text" onChange={da} value={state.name}/>
                <input placeholder="enter the city" name="city" type="text" onChange={da} value={state.city}/>
                <input type="submit" />
            </form>
        </>
    )
}
export default Form