// import Mybutton from "./components/Mybutton";
import Title from "./components/Title";
// import { useState } from "react";
function App() {
  // console.log(count);
  // const countState = useState(0)
  // const [count,setCount] = countState
  // // let count=1;
  // // const handleClick =()=>{
  // //   count =count++;
  // //   console.log(count);
  // const handleClick =()=>{
  //   // const arr=[4,68]
  //   // arr[0]=arr+1
  //   // count[1](10000)
  //   setCount(count+1)
  // }
  return (
    <div>
      <Title heading="Hello world"/>
      {/* <Mybutton onClick={handleClick} text ="Click me"/> */}
      {/* <Title heading="My first react app" />
      <Title heading="My second react app" />
      <Mybutton text="sign up" />
      <Mybutton text="log in" />
      <Mybutton text="log out" />
      <h1>number is - {count}</h1>
      <button onClick={handleClick}>Increase</button> */}
    </div>
  );
}
export default App;
