import React, { useState } from 'react'
import CommonPage from '../../CommonPage'
export default function Usestateproviders() {

    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const [colour, setcolour] = useState("danger")
    const [colour2, setcolour2] = useState("warning")
    const [addIteam, setIteam] = useState([]);
    const [fruits, setFruits] = useState([
        "🍎 Apple",
        "🍊 Orange",
        "🍌 Banana",
        "🍇 Grapes",
      ])
      const [update, srtUpdate] = useState({Name : "sumit", age : 20, roll : 23 })



     const updateValue = () =>{
        let newValue = {
            Name: "Priyansju",
            age: 18,
            roll:45,
        }
        srtUpdate(newValue)
     }
 
    const deleteByValue = (value) => {
        let old = () => fruits.filter(fruit => fruit !== value) 
        setFruits(old)
      
      }


    const colourOne = () => {
        setcolour("warning")
    }

    const colourTwo = () => {
        setcolour2("danger")
    }

const addList = (e) =>{
   e.preventDefault()
   console.log(addIteam);
}

const handelChange = (e)=>{
    const value = e.target.value;
    setIteam(addIteam => [...addIteam, value]);
}

    return (
        <>
            <CommonPage title={`Use State changing ${colour} colour by clicking`} />

            <div className="container py-5">
                <div className='row bg-dark '>
                    <div className={`col-6 bg-${colour} py-4`}>
                        <h2>This is col-1</h2>
                        <button className='btn btn-primary' onClick={colourOne}> Click Me</button>
                    </div>
                    <div className={`col-6 bg-${colour2} py-4`}>
                        <h2>This is col-2</h2>
                        <button className='btn btn-primary' onClick={colourTwo}> Click Me</button>
                    </div>
                </div>

                <div className='row py-4'>
                <div className='col'>
                    <form >
                        <input type="text" placeholder='enter the name' className='form-control' onChange={handelChange}/>
                     <button className='btn btn-primary text-center mt-4' onClick={addList}>Add Items</button>
                    </form>

                <ol>
                    {addIteam.map((item, i)=>{
                      return <li key={i}>{item}</li>
                    })}
                </ol>
                </div>
            </div>
            
            <ul>
        {fruits.map(fruit => {
          return (
            <li key={fruit}>
              <span>{fruit}</span>
              <button onClick={() => deleteByValue(fruit)}>Delete</button>
            </li>
          )
        })}
      </ul>

      <div className='row'>
        <div className='col'>
            <div className='text-center'>
            <p> Name : {update.Name}</p>
             <p> Age : {update.age}</p>
             <p>Roll no : {update.roll}</p>
             <button onClick={updateValue} > Update Value</button>
            </div>
             
        </div>
      </div>

            </div>

        </>


    )
}
