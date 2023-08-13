import { Html, useProgress } from "@react-three/drei"
import VideoComponent from "../video/video"
import { styled } from "styled-components"
import { useEffect } from "react"

interface MyComponentProps {
    text: string
}

const StyledH1 = styled.h1`
    position: absolute;
    z-index: 2;
    color: white;
`

export default function Loader(prop: MyComponentProps){
   
    return (
        <Html as="div">
            <VideoComponent/>
            <StyledH1>{prop.text}</StyledH1>
            
        </Html>
    )
}