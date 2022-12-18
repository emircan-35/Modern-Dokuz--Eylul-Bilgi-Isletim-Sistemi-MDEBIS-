import "../homeSide.css";
import Lessons from "./Lessons";
import { useEffect, useState } from 'react';
import{MainContext, useContext} from '../context'
function Syllabus() {
    const [css, setCss] = useState('grid-container');
   const{navVisible, infoStudent, setInfoStudent, token,setToken}= useContext(MainContext);
   
   
   const[contents, setContent] = useState([])
   useEffect(() => {
    try {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "http://localhost:8080/time_table/"+sessionStorage.getItem("token"),false);
      xhttp.setRequestHeader("Content-type", "text/html");
      xhttp.onload = function (e) {
       if (xhttp.readyState === 4) {
           if (xhttp.status === 200) {
  
            var response = JSON.parse(xhttp.response);   
            setContent(response);    
               
           }
        }
     }
    
     xhttp.send();
    
  
  } catch (error) {
    alert("Wrong pass or id");
  }
     
     
   }, []);
  

	useEffect (() =>{
    
     if(navVisible){
      setCss('grid-container-sm');
     }
     else{
      setCss('grid-container');
     }    
    console.log( sessionStorage.getItem("token"));
    console.log(contents);  
    },[navVisible])
   
   
  
      
	return (
        <>
        
        <div style={{transition:"0.8s"}} className={css}  >
    <div className="item1" >Saat</div>
      <div className="days" >Pazartesi</div>
      <div className="days">Salı</div>
      <div className="days" >Çarşamba</div>
      <div className="days">Perşembe</div>
      <div className="days">Cuma</div>
       {
            contents?.map(contents =>  <div ><Lessons Department={contents.Department} Lecturer_name={contents.Lecturer_name} AttandanceLimit = {contents.AttandanceLimit}></Lessons></div>)
          } 
      {/* <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      <div><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
     
      <div ><Lessons></Lessons></div>
      <div><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      <div><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      
      <div ><Lessons></Lessons></div>
      <div><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      
      <div ><Lessons></Lessons></div>
      <div><Lessons></Lessons></div>
      
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      
      <div ><Lessons></Lessons></div>
      <div><Lessons></Lessons></div>
     
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      <div><Lessons></Lessons></div>
      
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div>
      <div ><Lessons></Lessons></div> */}

      
      
    </div> 
    </>
		
  );
}

export default Syllabus;