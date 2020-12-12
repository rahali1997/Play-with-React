import React,{useState,useEffect} from 'react'
import axios from 'axios'



const Deatils = ({match}) => {

    const [comment,setComment]=useState({})

    useEffect(()=>{
        const getCommentById=async()=>{
            let {data}=await axios.get(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
            setComment(data)
        }
        getCommentById()
    },[match])

    return (
        <div className="container">
            <div className="row mt-4 justify-content-center">
                <div className="col-md-7">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">{comment.name}</h5>
                        <p className="card-text">{comment.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deatils
