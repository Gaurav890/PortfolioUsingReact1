import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";

import {
    TextField,
    Typography,
    Button,
    Grid,
    Box,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles (theme=>({
    form:{
        top:" 50%",
        left:" 50%",
        transform:"translate(-50%, -50%)",
        position:"absolute",
    },
}));

const InputField = withStyles({
    root:{
        "& label.Mui-focused":{
            color:"tomato",

        },
        "& label":{
            color:"tan",
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"tan"
            },
            "&:hover fieldset":{
                borderColor:"tan"
            },
            "&.Mui-focused fieldset":{
                 borderColor:"tan"
            }
        }


    }
})(TextField);

const Contacts = () => {

    const classes= useStyles();
    return (
        <>
            <Box component="div">
                <Grid container justify="center">
                <Box component="form" className={classes.form}>
                        <Typography variant="h5">
                            Hire or Contact Me
                        </Typography>
                        <InputField 
                        fullWidth={false} 
                        label="Name" 
                        variant="outlined" 
                        inputProps={{style:{color:"white"}}}
                        margin="dense" 
                        size="medium"/>

                        <br/>

                        <InputField 
                        fullWidth={false} 
                        label="Email" 
                        variant="outlined"
                        inputProps={{style:{color:"white"}}}
                        margin="dense" 
                        size="medium"
                        />

                        <br  />

                        <InputField 
                        fullWidth={false} 
                        label="Company Name" 
                        variant="outlined"
                        inputProps={{style:{color:"white"}}}
                        margin="dense" 
                        size="medium"
                        />

                        <Button variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
                            Contact Me
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </>
    );
};

export default Contacts;
