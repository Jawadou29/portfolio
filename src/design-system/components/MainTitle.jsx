import "../style/components/main-title.scss";

function MainTitle(props) {
  return (
    <div className='main-title'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default MainTitle