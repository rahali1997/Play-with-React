import React from 'react'
import {Link} from 'react-router-dom'


const Card = ({comment}) => {
    return (

        <div className="col-md-3 mt-2">
            <div className="card">
                <div className="card-body">
                 <h5 className="card-title">{comment.name}</h5>
                  <p className="card-text">{comment.email}</p>
                    <Link to={`/app/details/${comment.id}`}>
                        <button className="btn btn-primary">more details</button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Card
