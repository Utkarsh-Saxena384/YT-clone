import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'
const SearchBar = () => {
  const navigate = useNavigate()
  const [searchQuery, setsearchQuery] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (!searchQuery || searchQuery.trim().length<=0) {
      alert("Search something!")
      return
    }
    navigate(`/search/${searchQuery}`)
    setsearchQuery("")
    }
  return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{
        borderRadius:20,
        border: '1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{sm:5}
    }}
    >
        <input className='search-bar' placeholder='Search...' value={searchQuery} onChange={(e)=>{setsearchQuery(e.target.value)}}/>
        <IconButton type='submit' sx={{
            p:'10px', color:'red'
        }}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar