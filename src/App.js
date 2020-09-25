import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products=[{name:"photoshop",price:"$567"},
{name:"Illustrator",price:"$34"}]
  return (

    
    <div className="App">
      
<Header></Header>
<MovieCounter2></MovieCounter2><br/><hr/>
<MovieCounter3></MovieCounter3>
<hr/>
<Nayok></Nayok>
<hr/>
<Users></Users>
<hr/>
<Posts></Posts>

  
    </div>

  
  );
}

//header


function Header(){

  return(
    <div style={{width:"100%",paddingTop:"100px",fontSize:"39px",height:"300px",backgroundColor:"yellow"}}>
    <h2>Adobe Photoshop</h2>
    </div>

  )
}





function Posts(){
  const[posts,setPosts]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
  return(
    <div>
      <h4>Nayok:{posts.length}</h4>
      <ol>
        {
          posts.map(post=><li>{post.title}</li>)
        }
      </ol>
    </div>
  )
}
//load data from API
  
function Users(){
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])

  return(
  <div>
    <h2>Hello:{users.length}</h2>
    <ul>
      {
        users.map(user=><li>{user.email}</li>)
      }
    </ul>
    </div>
  )
}


//course price(on MouseOver)
function MovieCounter3(){
  const[count,setCount]=useState(0);
  const handleclick5=()=>setCount(count + 1);
return(
  <div>
<h2>Course:{count}</h2>
<button onMouseOver={handleclick5}>How much</button>
<h3>Total price:{count*10.89}</h3>
</div>
)
}



// state/hook of react

function MovieCounter2(){
  const [count,setCount]=useState(0);
  const handleClick= ()=> setCount(count +1 );

  //for decrease

  const handleClick2= ()=> setCount(count - 1);
return(
  <div>
    <h1>Movie:{count}</h1>
    <button onClick={handleClick}>Like</button>
    <br/>
    <br/>
    <button onClick={handleClick2}>Unlike</button>
    <h4>liked by:{count*3}</h4>
  </div>
)
}
function Nayok(){
  const style2={border:"2px solid black",
  display:"flex",
  width:"100%",
  height:"300px",
  float:"left",
  backgroundColor:"orange",
  padding:"20px",
  margin:"40px 20px",
  textAlign:"center",
}
  return( 
    
  <div style={style2}>
      <h2>New Arrival</h2>
      
  </div>
  )
}

export default App;
