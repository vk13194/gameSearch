import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { fetchSearch } from '../actions/gamesAction'
const Nav = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState()
    const handleText = (e) => {
        setInputText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchSearch(inputText))
        setInputText("")
    }
    const handleClear = (e) => {
        dispatch({
            type: "CLEAR_SEARCHED"
        })
    }
    return (
        < StyledNav>
            <button onClick={handleClear}>Clean</button>
            <div className="searched">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={inputText} onChange={handleText} />
                    <button type="submit">Search</button>
                </form>

            </div>
        </ StyledNav>
    )
}

export default Nav

const StyledNav = styled(motion.nav)`
padding:3rem 5rem;
text-align:center;
input{
    width: 30%;
    padding:0.5rem;
    font-size:1.5rem;
    border: none;
    box-shadow:0px 0px 30px rgba(0, 0, 0, 0.5);
    outline:none;
    font-weight:bold;
    
}
button{
    font-size: 1.5rem;
    padding:0.5rem 2rem;
    border:none;
    cursor:pointer;
    outline:none;
    background-color:#ff7676;
}
.searched{
    margin-top: 1rem;
}
`

