function Counter(props) {

  const { label, value, increment, decrement, deleteCount } = props

  return (
    <div className="counter">
      <p>
        {label}
        <button onClick={deleteCount}>Delete</button>
      </p>
      <h1>{value}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )

}

export default Counter