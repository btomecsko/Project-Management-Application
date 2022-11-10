import React from 'react'


const ACard = ({name, date, title, description}) => {
  return (
    <div className="card announceCard">
      <div className='cardHeader' style={{display: "flex", justifyContent: "space-between", marginTop:"2vh", marginLeft:"2vh"}}> 
      <h5 className="name">{name}</h5>
      <h5 className="date" style={{marginRight:"2vh"}}>{date}</h5>
      </div>
        <div className="card-body">
          <h4 className='title'>{title}</h4>  
          <p className="description">{description}</p>
        </div>
    </div>
  )
}

export default ACard
