import { useParams,Link } from 'react-router-dom'
import { useEffect,useState } from 'react'
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {Videos} from './'
import { fetchFromApi } from '../utils/fetchFromApi'
 
const VideoDetail = () => {
  const {id}=useParams()
   const [video,setVideo] = useState(null)
   const [realtedVideos, setrealtedVideos] = useState([])
   console.log(realtedVideos)
   
   useEffect(() => {
     fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
     .then((data)=>setVideo(data.items[0]))
     fetchFromApi(`search?part=snippet&relatedToVideoId=${id}`)
     .then((data)=>setrealtedVideos(data.items))
    }, [id])
    
    if (!video?.snippet) return  "Loading..."
    const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=video
  
  
  return (
    <Box minHeight={`95vh`}>
      <Stack direction={{xs:'column',md:'row'}} justifyContent="center">
          <Box flex={2}>
              <Box sx={{width:"100%",position:"sticky",top:"70px"}}>
              <ReactPlayer className="react-player" url={`https://www.youtube.com/watch?v=${id}`} controls />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
                <Stack direction="row" justifyContent="space-between" sx={{color:"#fff"}} py={1} px={2}>
                      <Link to={`/channel/${channelId}`}>
                        <Typography variant={{sm:'subtitle1',md:'h6'}} color="#fff" >
                          {channelTitle}
                          <CheckCircle sx={{fontSize:"12px",color:"gray",ml:"5px"}}/>
                        </Typography>
                      </Link>
                      <Stack direction={`row`} alignItems="center" gap="20px" >
                          <Typography variant="body1" sx={{opacity:"0.7"}}>
                                    {parseInt(viewCount).toLocaleString()} views
                          </Typography>
                          <Typography variant="body1" sx={{opacity:"0.7"}}>
                                    {parseInt(likeCount).toLocaleString()} likes
                          </Typography>
                      </Stack>
                </Stack>
              </Box>
          </Box>

          <Box  px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center"  >
            <Videos videos={realtedVideos} direction="column"/>
          </Box>
      </Stack>
    </Box>

  )
}

export default VideoDetail