
import { Box } from '@mui/material';
import {Routes,Route} from 'react-router-dom'
import {ChannelDetail,Feed,SearchFeed,Navbar,VideoDetail} from './components'
function App() {
  return (
    <Box sx={{
      backgroundColor:'#000'
    }}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed/>} />
        <Route path='/video/:id' exact element={<VideoDetail/>} />
        <Route path='/channel/:id' exact element={<ChannelDetail/>} />
        <Route path='/search/:searchTerm' exact element={<SearchFeed/>} />
        <Route path='/search/:searchTerm/channel/:id' exact element={<ChannelDetail/>}/>
      </Routes>
    </Box>
  );
}

export default App;
