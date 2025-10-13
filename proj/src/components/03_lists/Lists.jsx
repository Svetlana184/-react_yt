
//каждому элементу нужен уникальный ключ
//можно юзать деструктуризацию
const Lists = () => {
    const numbers = [1,2,3,4,5];
    const users = [
      {id:1, name:"Alice", age:25},
      {id:2, name:"Bob", age:30},
      {id:3, name:"Charlie", age:22}
    ]
  return (
    
    <div>
        {numbers.map((item)=> (<p key={item}>
            {item}
        </p>))}
        <br />
        
        <div>
          {users.map(({id, name, age})=>(
            <div key={id}>
              <p>{name}</p>
              <p>{age}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Lists