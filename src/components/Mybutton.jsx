import './Mybutton.css'
const Mybutton = (props) => {
  return (  
      <button onClick ={props.onClick} className='btn'>{props.text}</button>
  );
};
export default Mybutton;