import styled from "styled-components";
import "../homeSide.css";
import items from "../LecturerSideBar.json";
import { useEffect, useState } from 'react';
import SidebarItem from './HomeSideBarItems';
import Lessons from "./Lessons";
import {Outlet, useLocation} from "react-router-dom";

const StyledInput = styled.input`
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
border-radius: 2rem;
width: 45%;
height: 3rem;
padding: 1rem;
border: none;
outline: none;
color: #3c354e;
font-size: 1rem;
font-weight: bold;
&:focus {
  display: inline-block;
  box-shadow: 0 0 0 0.2rem #b9abe0;
  backdrop-filter: blur(12rem);
  border-radius: 2rem;
}
&::placeholder {
  font-weight: 100;
  font-size: 1rem;
}
`;
const ButtonContainer = styled.div`
margin: 1rem 0 1rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;


function LecturerPage(){
  
 
  const[lessons, setContent] = useState([])

     



    return(
        <div className="noBg">
            
      <aside className="sidebarAdmin">
      { items.map((item, index) => <SidebarItem key={index} item={item} />) }
      </aside>
      
  
      <Outlet></Outlet>
        </div>
        
    );
}
    export default LecturerPage;