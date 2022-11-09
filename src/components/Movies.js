import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (

    
    
    <Container>
        
        
        <Wrap>
        <img src="/images/viewers-disney.png" />

    </Wrap>
    <Wrap>
        <img src="/images/viewers-disney.png" />

    </Wrap>
    <Wrap>
        <img src="/images/viewers-disney.png" />

    </Wrap>
    <Wrap>
        <img src="/images/viewers-disney.png" />

    </Wrap>
    <Wrap>
        <img src="/images/viewers-disney.png" />

    </Wrap>
    <Wrap>
        <img src="/images/viewers-pixar.png" />

    </Wrap>
    <Wrap>
        <img src="/images/viewers-marvel.png" />

    </Wrap>
    <Wrap>
        <img src="/images/viewers-starwars.png" />

    </Wrap>
    <Wrap>
        <img src="/images/viewers-national.png" />

    </Wrap>



       
 
</Container>
  )
}

export default Movies
const Container=styled.div`
padding;0 0 26px;
display:grid;
padding:40px 0px 26px;
grid-template-columns:repeat(4, minmax(0, 1fr));
grid-gap:25px;




`


const Wrap=styled.div`
border:3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 /73%)0px 16px 10px -10px;
border-radius:10px;
overflow:hidden;
cursor:pointer;


transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
 

img{
    width:100%;
    height:100%;
    object-fit:cover;

}
&:hover{
    transform:scale(1.05);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,
rgb(0 0 0 /73%)0px 30px 22px -10px;
    border-color:rgba(249,249,249,0.8)
    

}

`


 
 

