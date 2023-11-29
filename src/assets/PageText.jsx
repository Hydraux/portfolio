import { Box, Typography } from "@mui/material";
import { PAGETEXT } from "../data";

function getBody(topic) {
    if (topic == 'projects') {
        return (
            <Box sx={{width: '80vw'}}>
                <Typography fontFamily='Lato' variant="h4" align="left"><b>Weather Datascaper:</b> A Python program which scrapes the weekly weather forecast from <a href='https://www.weather.com'>www.weather.com</a></Typography>
                <Typography fontFamily='Lato' align="left">Insert link to source code here</Typography>
                <Typography fontFamily='Lato' align="left">Insert example image here</Typography>
                <br/>
                <Typography fontFamily='Lato' variant="h4" align="left">Portfolio: This ReactJS website which displays information about me :D</Typography>
                <Typography fontFamily='Lato' align="left">Insert link to source code</Typography>
                <br/>
                <Typography fontFamily='Lato' variant="h4" align="left">Recipedia: Shopping list/Recipe book which can be shared with friends</Typography>
                <Typography fontFamily='Lato' align="left">Insert link to source code here</Typography>
                <Typography fontFamily='Lato' align="left">Insert example image</Typography>
                <br/>
                <Typography fontFamily='Lato' variant="h4" align="left">Godot 2D RPG: A turn based tactical RPG game developed using the Godot game engine.</Typography>
                <Typography fontFamily='Lato' align="left">Insert link to source code here</Typography>
                <Typography fontFamily='Lato' align="left">Insert example image</Typography>


                
            </Box>
        )
        
    }
    var textObj = PAGETEXT[topic]
    const text = textObj.map((val, index) => <><Typography key={index} align="left" fontFamily='Lato'>{val}</Typography><br /></>)
    return <Box alignSelf='center' sx={{ width: '80vw' }}>{text}</Box>
}

export default function PageText({ topic }) {
    


    return (
        getBody(topic)
    );
}