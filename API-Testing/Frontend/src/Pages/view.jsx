import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';


function View() {
    let [showDatas, setdatas] = useState([])
    let navigate = useNavigate()
    let [dataEdit,setdataEdit] =useState(null)
    useEffect(() => {
        axios.get("http://localhost:2001/showData")
            .then((res) => {
                console.log(res.data.record)
                setdatas(res.data.record)
            })
    }, [])

    function dele(id) {
        console.log(id)
        axios.delete(`http://localhost:2001/delete?id=${id}`)
            .then(() => {
                var delet = showDatas.filter((el, i) => {
                    console.log(el._id)
                    if (el._id != id) {
                        return el
                    }
                })

                setdatas(delet)
            })
    }

    return (
        <>
            {
                showDatas.map((el, i) => {
                    return <>
                        <h1>{el.name}</h1>
                        <p>{el.city}</p>
                        <button onClick={() => dele(el._id)}>Delete</button>
                        <Link to={`/edit/${el._id}`}><button>edit</button></Link>
                    </>
                })

            }
        </>
    )

}
export default View