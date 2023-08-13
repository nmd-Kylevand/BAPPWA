import { keyframes, styled } from "styled-components"
import { createTheme, Slider, SliderMark, ThemeProvider } from "@mui/material";
import './slider.css'
import { useState } from "react";
import { redirect } from "next/navigation";


interface MyComponentProps {
    direction?: string 
}

const theme = createTheme({
    palette: {
        primary: {
            main:'#FFFFFF'
        }
    }
})

const SliderButton = (props: MyComponentProps) => {
    const [value, setValue] = useState(0)

   

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    if(value === 50){
        redirect('/overview')
    }
    console.log(value)


    return (
        <ThemeProvider theme={theme}>
        <Slider
            color="primary"
            size="small"
            orientation={props.direction}
            value={value}
            min={0}
            max={50}
            onChange={handleChange}
        sx={{
            
            "& .MuiSlider-track":{
                width: "250px",
            },
            "& .MuiSlider-thumb": {
                color: "secondary",
                height: 12,
                width: 12,
               
            },
            
        }}/>
       </ThemeProvider>
    )

}

export default SliderButton;