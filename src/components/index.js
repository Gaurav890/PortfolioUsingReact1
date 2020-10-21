import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Particles from 'react-particles-js';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    particlesCanva:{
        position:"absolute",
        opacity: "0.3"
    }
})

const Home = () => {

    const classes = useStyles();
    return (
        <div>
            <Navbar/>
            <Header/>
            <Particles 
            canvasClassName={classes.particlesCanva}
               params = {{
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "tomato"
                        },
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 10,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    line_linked: {
                        enable_auto: true,
                        distance: 100,
                        color: "#fff",
                        opacity: 1,
                        width: 1,
                        condensed_mode: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 600
                        }
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                }
            }} 
            />
        </div>
    )
}

export default Home;