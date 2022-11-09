import React from 'react'
import styled from 'styled-components'


function Detail() {
  return (
    <Container>
      <BackgroundImage>
        <img src="/images/Kungfu.png"/ >
      </BackgroundImage>
      <ImageTitle>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1zjECvluLGdUHo3MQ5nFHzgWKkk0v95M2tSDtUyqF9hR68p0Kw1OFVdoSFX_an4_5gA&usqp=CAU"/>

      </ImageTitle>
      <Controls>
        
        <PlayButton>
          <img src="/images/play-icon-black.png"/>
          <span>
            Play
          </span>
          
        </PlayButton>
        <TrialButton>
          <img src="/images/play-icon-white.png"/>
          <span>TRAIAL</span>

        </TrialButton>
        <AddButton>
          

        </AddButton>
        <GroupWatchBtn>

        </GroupWatchBtn>

      </Controls>
      
    </Container>
  )
}

export default Detail


  const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:-1;
  opacity:0.8;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
 
  `
const ImageTitle = styled.div`
  height:30vh;
  width:35vw;
  min-height:170px;
  min-width:200px;


  img{
    width:100%;
    height:100%;
    object-fit:contain;
  }
 `

const Controls = styled.div`
 display: flex;
 

  
`
const PlayButton =styled.div`
cursor:pointer;
border-radius:4px;
  font-size:15px;
  padding:0px,24px;
  margin-right:22px;
  display:flex;
  align-items:center;
  height:70px;
  background: rgb (249,249,249);
  border:none;
  letter-spacing:1.8px;
`
  const TrialButton = styled.div`
  border-radius:4px;
  font-size:15px;
  padding:0px,24px;
  margin-right:22px;
  display:flex;
  align-items:center;
  height:70px;
  background: rgb (249,249,249);
  border:none;
  letter-spacing:1.8px;
  cursor:pointer;
  `
  const AddButton = styled.div`
  `
  const GroupWatchBtn = styled.div`
  ` 
  const Container = styled.div`
  min-height:calc(100vh -70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  `
