import React, {useState} from 'react'
import '../App.css';
import { generatePassword } from './Functions';
import { generate, count } from "random-words";

const Home = () => {
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [upper,setUpper] = useState(false)
    const [special,setSpecial] = useState(false)
    const [number,setNumber] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        if(e.target[0].value <= 4){
            setError("Please pick a number greater than 4")
            setPassword("")
        }else if(e.target[0].value > 32){
            setError("Please pick a number less than 33")
            setPassword("")
        }else{
            console.log(generate({minLength:4,maxLength:4}))
            setPassword(generatePassword(e.target[0].value, upper, special, number))
            setError("")
        }
    }

    const upperHandler = (e) => {
        setUpper(!upper)
    }

    const specialHandler = (e) => {
        setSpecial(!special)
    }

    const numberHandler = (e) => {
        setNumber(!number)
    }

    return (
        <div className='container'>
            <form onSubmit={submitHandler} className='passwordForm'>
                <div className='errorDisplayed'>
                    {
                        error?
                        <p>{error}</p>:
                        ""
                    }
                </div>
                <p>Generated Password: {password}</p>
                <div className='length'>
                    <label>Password length (maximum 32 characters):</label>
                    <input type='number'/>
                </div>
                <div className='radioButtons'>
                    <p>Password requirements:</p>
                    <div>
                        <input type='checkbox' value='true' onChange={upperHandler}/>
                        <label>Upper Case?</label>
                    </div>
                    <div>
                        <input type='checkbox' value='true' onChange={specialHandler}/>
                        <label>Special Characters?</label>
                    </div>
                    <div>
                        <input type='checkbox' value='true' onChange={numberHandler}/>
                        <label>Numbers?</label>
                    </div>
                </div>
                <button>Generate Password</button>
            </form>
        </div>
    )
}

export default Home