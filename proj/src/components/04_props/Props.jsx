

const Props = ({name, age, children}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{age}</p>
        <div>{children}</div>
    </div>
  )
}

export default Props