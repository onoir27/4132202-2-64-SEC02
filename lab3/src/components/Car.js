import React,{useState} from "react";

const dom = (
    <>
    <h1>Hello React !!!</h1>
    <p> My name is Prayuth</p>
</>
);
function Car() {
    const [color, setColor] = useState("red")
    const id = "630112418079"
     return(
          <> 
     {dom}
     <p>ID : {id}</p>
     <p>My Color is {color}</p>
     <button onClick={() =>{
         setColor("blue");
         }}>
             Henshin
            </button>
     </>
     );
}
export default Car