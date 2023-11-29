import { AppBar, Box, Button, Container, Grid, Menu, Paper, Tab, Toolbar, Typography } from '@mui/material';
import { SKILLS } from '../data';

export default function Skill({skill}){
    return (
        <Grid item width={100}>
            <img src={SKILLS[skill]} />
        </Grid>
    );
}