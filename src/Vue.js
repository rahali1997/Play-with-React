import React,{useEffect,useState,useRef} from 'react'
import Card from './Components/Card'
import axios from 'axios'

const Vue = () => {
    const [State,Setstate]=useState([])
    const InputRef=useRef()

    useEffect(()=>{
        const getComments=async()=>{
            let {data}=await axios.get('https://jsonplaceholder.typicode.com/comments')
            Setstate(data)
        }
        getComments()
    },[])
    
    const getComment=async(e)=>{
        e.preventDefault()
        let id=InputRef.current.value;
        let {data}=await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
        Setstate([data])
        
        
    }
    return (
        <div className="container">
            <form>
                <div className="row justify-content-center -center mt-4">
                    <div className="col-2">
                        <input ref={InputRef} min='1' type="number" className="form-control" />
                    </div>
                    <div className="col-2">
                        <button onClick={(e)=>getComment(e)} className="btn btn-primary">search</button>
                    </div>
                </div>
                <div className="row mt-3 justify-content-around">
                   {State.map(comment=><Card key={comment.id} comment={comment} />)}
                </div>
            </form>
        </div>
    )
}
export default Vue
