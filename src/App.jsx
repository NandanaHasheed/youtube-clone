import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Avatar
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";


const videos = [

{
title:"React JS Tutorial For Beginners",
channel:"Programming World",
views:"1.2M views",
time:"2 days ago",
image:"https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg"
},

{
title:"JavaScript Complete Course",
channel:"Code Academy",
views:"900K views",
time:"1 week ago",
image:"https://i.ytimg.com/vi/W6NZfCO5SIk/maxresdefault.jpg"
},

{
title:"Build Projects Using React",
channel:"Frontend Dev",
views:"500K views",
time:"3 days ago",
image:"https://i.ytimg.com/vi/SqcY0GlETPk/maxresdefault.jpg"
},

{
title:"Learn HTML CSS From Scratch",
channel:"Web Master",
views:"800K views",
time:"5 days ago",
image:"https://i.ytimg.com/vi/G3e-cpL7ofc/maxresdefault.jpg"
},

{
title:"Python Full Course",
channel:"Tech World",
views:"2M views",
time:"1 month ago",
image:"https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg"
},

{
title:"Coding Tips Everyone Should Know",
channel:"Dev Life",
views:"300K views",
time:"4 days ago",
image:"https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg"
}

];


function App(){

const [search,setSearch] = useState("");


const filteredVideos = videos.filter((video)=>
video.title.toLowerCase()
.includes(search.toLowerCase())
);



return (

<Box
sx={{
background:"#0f0f0f",
minHeight:"100vh",
color:"white"
}}
>


<AppBar
position="fixed"
sx={{
background:"#0f0f0f"
}}
>

<Toolbar>


<MenuIcon />


<Typography

variant="h5"

sx={{
ml:2,
fontWeight:"bold",
color:"red"
}}

>

▶ YouTube

</Typography>



<Box
sx={{
flex:1,
display:"flex",
justifyContent:"center"
}}
>


<TextField

placeholder="Search"

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

sx={{
width:"50%",
background:"white",
borderRadius:"30px"
}}

/>



<IconButton
onClick={()=>{}}
sx={{
color:"white",
ml:1
}}
>

<SearchIcon/>

</IconButton>


</Box>


</Toolbar>

</AppBar>





<Drawer

variant="permanent"

sx={{

width:220,

"& .MuiDrawer-paper":{
width:220,
background:"#0f0f0f",
color:"white",
top:64
}

}}

>


<List>


{[
"🏠 Home",
"🔥 Trending",
"🎵 Music",
"🎮 Gaming",
"📺 Subscriptions",
"📚 Library",
"⏱ History"
].map((item)=>(


<ListItem key={item}>

<ListItemText primary={item}/>

</ListItem>


))}


</List>


</Drawer>





<Box

sx={{
ml:"240px",
pt:10,
p:3
}}

>


<Grid container spacing={3}>


{
filteredVideos.map((video,index)=>(


<Grid

xs={12}
sm={6}
md={4}

key={index}

>


<Card

sx={{
background:"#181818",
color:"white",
borderRadius:3
}}

>


<CardMedia

component="img"

height="190"

image={video.image}

/>



<CardContent>


<Typography
fontWeight="bold"
>

{video.title}

</Typography>



<Box

display="flex"

alignItems="center"

mt={2}

>


<Avatar
sx={{
mr:1
}}
/>


<Typography color="gray">

{video.channel}

<br/>

{video.views} • {video.time}

</Typography>


</Box>


</CardContent>


</Card>


</Grid>


))
}


</Grid>


</Box>


</Box>


);

}


export default App;