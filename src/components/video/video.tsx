import { styled } from "styled-components"
const StyledVideo = styled.video`
    // position: fixed;
    // right: 0;
    // bottom: 0;
    // min-width: 100%;
    // min-height: 100%;
    z-index: 3;

`

const VideoComponent = () => {
    return (
        <StyledVideo autoPlay muted loop>
            <source  src="../video/background.mp4" type="video/mp4"/>
        </StyledVideo>
    )
}
export default VideoComponent