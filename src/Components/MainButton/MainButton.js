import './MainButton.css';



const MainButton = (props) => {
  return (
    <button className={props.className} >
      
      {props.title}
      {/* {props.children} */}
    </button>
  )
}

export default MainButton