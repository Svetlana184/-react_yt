import { useState } from 'react'

const Dzshka = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count +1);

  const [todolist, setList] = useState([]);
  const [todoName, setTodoname] = useState('');
  const [quantity, setQuantity] = useState(0);
  const handleSubmitTodo = (e) => {
    e.preventDefault();
    if(!todoName || !quantity) return;
    setList([...todolist, {todoName: todoName, quantity:quantity}]);
    setTodoname("" )
    setQuantity(0)
};

  const [profile, setProfile] = useState({name: "no name", age:18});
    const handleChangeProfile = (e) => 
        {
            const {name, value} = e.target
            setProfile({...profile, [name]:value});
        }
    

    const [upgradedList, setUpgradedList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            setUpgradedList([...upgradedList, inputValue]);
            setInputValue('')
        } 
    }
    const handleChangeValue = (event) =>  setInputValue(event.target.value)
    return (
    <div>
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
        </div>

        <div></div>
        <div>
            {
            todolist.map((item, index) => 
            <li key={index}>
                    <p>{item.todoName}</p>
                    <p>{item.quantity}</p>
            </li>) }
            <form onSubmit={handleSubmitTodo}>
                <input type='text' name='todoName' value={todoName} onChange={e => setTodoname(e.target.value)}/>
                <input type='text' name='quantity' value={quantity} onChange={e => setQuantity(e.target.value)}/>
                <button type='submit'>add item</button>
            </form>
        </div>

        <div>

            <h1>User profile</h1>
            <label >
                Name:
                <input type="text" name='name' value={profile.name} onChange={handleChangeProfile} />
            </label>
            <label >
                Name:
                <input type="text" name='age' value={profile.age} onChange={handleChangeProfile} />
            </label>
            <h2>name: {profile.name}</h2>
            <h3>age: {profile.age}</h3>
        </div>

        <div>
            {
            upgradedList.map((item) => 
            <li key={Math.random()}>
                    {item}
            </li>) }
            <form onSubmit={handleSubmit}>
                <input type='text' value={inputValue} placeholder='add new item' onChange={handleChangeValue}/>
                <button type='submit'>add</button>
            </form>
        </div>
    </div>
  )
}

export default Dzshka