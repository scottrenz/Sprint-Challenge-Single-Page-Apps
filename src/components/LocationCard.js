import React from 'react'
let count = 0;
export default function LocationCard (props) {
  // image={image}

  let resid = ({residents: props.residents});

  let resno = 0
  const res =  Array.from(resid).map((star,ix,arr) => {
resno = resno +1
})

  return (<span>
       
    <div style={{width: '400px',marginLeft: '20px',marginTop: '0',border: 'thin solid grey',borderRadius: '10px'}}>
    <h2> {props.name}</h2>
    <li>Created: {props.created}</li>
    <li>Dimension: {props.dimension}</li>
    <li>Type: {props.type}</li>
    {/* <li>Residents: {resno}</li> */}
    </div>
    </span>
    )
}
