import React, {useState} from 'react'
import '../App.css';
import { generatePassword, generateApplePassword } from './Functions';

const Home = () => {
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [upper,setUpper] = useState(false)
    const [special,setSpecial] = useState(false)
    const [number,setNumber] = useState(false)

    const passwordHandler = (e) => {
        e.preventDefault()
        if(e.target.form[0].value < 4){
            setError("Please pick a number greater than 3")
            setPassword("")
        }else if(e.target.form[0].value > 32){
            setError("Please pick a number less than 33")
            setPassword("")
        }else{
            setPassword(generatePassword(e.target.form[0].value, upper, special, number))
            setError("")
        }
    }

    const applePasswordHandler = (e) => {
        e.preventDefault()
        setPassword(generateApplePassword())
        setError("")
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
            <div className='titles'>
                <p className='title'>Random Password Generator</p>
                <p className='subtitle'>By Matthew Luk</p>
            </div>
            <form className='passwordForm'>
                <div className='errorDisplayed'>
                    {
                        error?
                        <p>{error}</p>:
                        ""
                    }
                </div>
                <p>Generated Password: {password}</p>
                <div className='length'>
                    <label>Password length (between 4 and 32 characters):</label>
                    <input className={`${error? "errorBorder": "" }`} type='number' placeholder='0'/>
                </div>
                <div className='radioButtons'>
                    <p>Password requirements:</p>
                    <div>
                        <input type='checkbox' value='true' onChange={upperHandler}/>
                        <span className='checkmark'></span>
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
                <div className='buttons'>
                    <button onClick={passwordHandler} className='btn1'>Generate Password</button>
                    <button onClick={applePasswordHandler} className='btn2'>Generate Apple Strong Password</button>
                </div>
            </form>
        </div>
    )
}

export default Home