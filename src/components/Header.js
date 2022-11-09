import React from 'react'
import styled from 'styled-components'
import Styled from 'styled-components'

function Header() {
  return (
    
     

      
    <Nav>
      <Logo src="/images/Logo.svg"/>

      <NavMenu>
        
        <a>
          <img src="images/home-icon.svg"/>
          <span>HOME</span>
        </a>
        <a>
          <img src="images/search-icon.svg"/>
          <span>SEARCH</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg"/>
          <span>WATCH LIST</span>
        </a>
        <a>
          <img src="images/original-icon.svg"/>
          <span>ORGINAL</span>
        </a>
        <a>
          <img src="images/movie-icon.svg"/>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="images/series-icon.svg"/>
          <span>SERIES</span>
        </a>

      
      </NavMenu>
      <UserImg src="images/my.jpg"/>

    </Nav>

  
  )
}

export default Header

const Nav=styled.div`
height:70px;
background-color:#090b13; 
display:flex;
align-item:center;
padding:0 36px;
overFlow-x:hidden;

`
const ItemText=styled.div`
color:white;
display:flex;
cursor:pointer;
align-item:center;
`
const Logo=styled.img`
`
const NavMenu=styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;

a{
  display:flex;
  align-items:center;
  padding:0 12px;
  cursor:pointer;
  
  img{
    height:20px;
  }
  span{
    font-size:13px;
    letter-spacing:1.42px;
    position:relative;

    &:after{
      content:'';
      height:2px;
      background:white;
      position:absolute;
      left:0;
      right:0;
      bottom:-6px;
      opacity:0;
      transform-origin:left center;
      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
      transform:scaleX(0);
       
    }
    }
    &:hover{
      span:after{
        transform:scaleX(1);
        opacity:1;
      }
    }


}
`
const UserImg=styled.img`
border-radius:50%;
width:48px;
height:48px;
cursor:pointer;


`