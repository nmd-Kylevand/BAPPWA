import { styled } from "styled-components"
const StyledVideo = styled.video`
    position:absolute;
    z-index: 20;
    width: 100%;
    margin: none;
    padding: none;

`

const VideoComponent = () => {
    return (
        <StyledVideo autoPlay muted loop>
            <source  src="../video/background.mp4" type="video/mp4"/>
        </StyledVideo>
    )
}
export default VideoComponent