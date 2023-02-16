import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos,ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromApi'
const ChannelDetail = () => {
  const {id} = useParams()
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>{setchannelDetail(data.items[0])})

    fetchFromApi(`search?part=snippet&order=date&channelId=${id}`)
    .then((data)=>{setVideos(data.items)})
  },[id])
  return (
    <Box minHeight={`95vh`}>
      <Box>
        <div style={{
          height:"300px",
          zIndex:"10",
           background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)'
        }}/>
      </Box>
       <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
      <Box display={`flex`} padding="20px" alignItems="center" >
            <Box sx={{mr:{sm:'100px'}}}/>
              <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail