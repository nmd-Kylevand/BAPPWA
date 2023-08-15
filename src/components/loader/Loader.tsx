import { Html } from "@react-three/drei"
import VideoComponent from "../video/video"
import { styled } from "styled-components"
import './loader.css'

interface MyComponentProps {
    text: string
}

const StyledH1 = styled.h1`
    position: relative;
    color: white;
    z-index: 5;
   
`

export default function Loader(prop: MyComponentProps){
   
    return (
        <Html as="div" className="fixed h-screen w-screen items-center justify-center">
            <VideoComponent/>
            <StyledH1>{prop.text}</StyledH1>
            
        </Html>
    )
}