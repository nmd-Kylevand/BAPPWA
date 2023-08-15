import { FunctionComponent } from "react"
import { keyframes, styled } from "styled-components"

const scaleAnimationIn = keyframes`
from {
    opacity: 0;
    transform: translateY(100%);
}
to { opacity: 1 }
`
const StyledDiv = styled.div`
    width: 100%; 
    height: 485px;
    top: 0;
    left: 0;
    color: white;
    overflow-y: scroll;
    animation: ${scaleAnimationIn} 1s;
    animation-duration: 1s;
    animation-fill-mode: both;
    scrollbar-color: red yellow;


`

interface MyComponentProps {
    text: any
}


const Overlay = ({text}: MyComponentProps) => {
    return(
        <StyledDiv>
            {text}
        </StyledDiv>
    )   
}

export default Overlay