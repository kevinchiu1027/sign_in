import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons//LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login=()=>{

    const paperStyle={padding : 20, height: '50vh', width: 280, margin: "20px auto"}
    const gridStyle={padding: 5}
    const avatarStyle={backgroundColor: '#cd04abd9'}
    const buttonStyle={margin:'8px 0'}

    return (
        <Grid>
            <Paper elevation={10} style ={paperStyle}>
                <Grid container direction='column' justifyContent='center' alignItems='center' style={gridStyle}>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                        <Checkbox
                        name="checkedB"
                        color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type ='submit' color='primary' variant='contained' style={buttonStyle} fullWidth>Sign in</Button>
                <Typography>
                    <Link href="#" >
                    Forgot password?
                    </Link>
                </Typography>
                <Typography> Do you have an account? {' '}
                    <Link href="#" >
                    Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login