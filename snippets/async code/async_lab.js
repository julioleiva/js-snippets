import React from 'react'
function Son({name="Lucas", age="39"}){
  return <div>{name} and {age}</div>
}

function Parent(props) {
  return (
      <> 
        <h1>Hola {props.name} 👋🌍!</h1>
        <Son name="pedro" age="34"/>
      </>
    )
     
  }

Parent({name:'Pedro'})
Son({name:'hijo'})