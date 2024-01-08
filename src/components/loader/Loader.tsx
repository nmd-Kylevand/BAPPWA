import { Html } from "@react-three/drei"
import VideoComponent from "../video/video"
import { styled } from "styled-components"

interface MyComponentProps {
    text: string
}

const StyledH1 = styled.h1`
    color: white;
    z-index: 25;
   
`

export default function Loader(prop: MyComponentProps){
   
    return (
        <Html prepend as="div" className="absolute inset-0 z-40 flex h-full w-full items-center justify-center overflow-hidden">
            
            <VideoComponent/>
            <StyledH1>{prop.text}</StyledH1>
        </Html>
    )
}