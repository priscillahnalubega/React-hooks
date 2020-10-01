import React, {useState} from 'react'
import './App.css'

 function Text() {

     const[name,setName]= useState({nameAny:''})
    return (
        <form>
<input type="text"
value={name.nameAny}
onChange={e =>setName({nameAny:e.target.value})}
className="cool"/>
<h1>{name.nameAny}</h1>
            
        </form>
    )
}

export default Text