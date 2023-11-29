import { Grid, Paper, Typography } from '@mui/material';
import profile from './Images/Headshot.png'
import Timeline from '@mui/lab/Timeline';
import Event from './Event'
import Skill from './Skill'

export default function HomePage() {
    return (
        <>
            <Paper sx={{ width: '100vw' }}>
                <Grid container wrap='nowrap' alignItems='center' justifyContent='space-between' sx={{ height: '100%' }}>
                    <Grid item xs={50} sx={{ ml: 30 }} >
                        <Typography variant='h3' >
                            I'm Ryan Bezold
                        </Typography>
                        <Typography variant='h3'>
                            Software Developer
                        </Typography>
                    </Grid>
                    <Grid item xs={79} sx={{ mr: 30, ml: 0 }}>
                        <img src={profile} style={{ width: "100%" }} />
                    </Grid>
                </Grid>
            </Paper>
            <Paper sx={{ width: '100vw', height: '75vh' }} elevation={0}>
                <Grid>
                    <Typography variant='h2'>Skills</Typography>
                    <Grid container wrap='nowrap' justifyContent='center' style={{ gap: 10 }}>
                        <Skill skill='react' />
                        <Skill skill='python' />
                        <Typography variant='h2' fontFamily='Roboto'>SQL</Typography>
                        <Skill skill='cpp' />
                        <Skill skill='csharp' />
                        <Skill skill='flutter' />
                        <Skill skill='firebase' />
                        <Skill skill='linux' />
                        <Skill skill='git' />
                        <Skill skill='godot' />
                        <Skill skill='html5' />
                    </Grid>
                    <Typography variant='h2' >
                        Brief History of Me
                    </Typography>
                    <Timeline>
                        <Event time="Oct 16 2000">Born</Event>
                        <Event time="2012">Passion for Programming Discovered</Event>
                        <Event time="2013">1st Place in State Game Dev Competition</Event>
                        <Event time="2015">NKU Programming Camp</Event>
                        <Event time="2018">Begin UK Computer Engineering</Event>
                        <Event time="2020">Published First Mobile App</Event>
                        <Event time="Dec 2022">Graduate: Bachelors in Computer Engineering</Event>
                        <Event time="2023 - Present">TSE at Epic</Event>
                        <Event>Start work at your company</Event>
                    </Timeline>
                </Grid>
            </Paper>
        </>
    );
}