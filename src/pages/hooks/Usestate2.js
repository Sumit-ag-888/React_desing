import React, { useState } from 'react'


export default function Usestate2() {
    const [msg, setMsg] = useState({
        message: "",
    });
    const [messageList, setMessageList] = useState([]);

    const [totle, setTotle] = useState(0)
    const [price, setPrice] = useState(0)

    const add = () => {
        setTotle(totle + 1)
        setPrice(price + 5)
    }

    const remove = () => {
        setTotle(totle - 1)
        setPrice(price - 5)
    }

    const handelChange = (e) => {
        setMsg({ ...msg, [e.target.name]: e.target.value });
    }

    const listMassage = (e) => {
        e.preventDefault();

        // const { message } = msg;

        console.log(msg)

        // setMessageList([...messageList ,{id: messageList.length + 1, message: message}]);
        setMsg("");
    }

    const deleate = (index) => {
        console.log(index)
    }
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className='text-center'>UseState 2</h2>
                        <div>
                            <input type="text" name='message' placeholder="Enter a message" onChange={handelChange} />
                            <input type="button" value="Add" onClick={listMassage} />
                            <ul>
                                {messageList.map((m, i) => (
                                    <li key={m.id}>{m.message}
                                        <button onClick={() => { deleate(i) }} >Deleate</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='col'>
                        <p> Shopping cart : {totle} Totle items</p>
                        <p>price : {price} rs</p>
                        <button onClick={add}>Add</button>
                        <button onClick={remove}>Remove</button>

                    </div>
                </div>
            </div>
        </div>

    )
}
