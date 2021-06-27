function Counter(props) {
  return (
    <div className="counter">
      <p>{props.label}</p>
      <h1>{props.value}</h1>
      <button>+</button>
      <button>-</button>
    </div>
  )

}

export default Counter