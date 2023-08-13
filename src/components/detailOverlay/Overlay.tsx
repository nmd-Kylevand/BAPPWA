import { styled } from "styled-components"


const StyledDiv = styled.div`
    width: 100%; 
    height: 100%;
    top: 0;
    left: 0;
    color: white;
    overflow-y: scroll;


`

interface MyComponentProps {
    text: string
}


const Overlay = (props: MyComponentProps) => {
    return(
        <StyledDiv>
            {props.text}
        </StyledDiv>
    )   
}

export default Overlay