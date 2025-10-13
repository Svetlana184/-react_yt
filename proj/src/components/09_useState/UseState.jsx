import { useState } from 'react';

const UseState = () => {
    
    const [count, setCount] = useState(0);
    const increment = ()=> setCount(count+1);



    const [friends, setFriends] = useState(["alex", "john"]);
    const addOneFriend = () => setFriends([...friends, "me"]);
    const removeFriend = () => setFriends(friends.filter(f => f !== 'me'));
    const updateFriend = () => setFriends(friends.map(f=> f == "alex" ? "alex smith" : f));



    const handleClick = () => {
        const copyMovie = {
            ...movie,
            ratings:5
        }
        setMovie({...movie, ratings:5})
    }
    const [movie, setMovie] = useState({title: 'Spiderman', ratings:7});


    const [movies, setMovies] = useState([
        {id:1, title: "batman", ratings:3},
        {id:2, title:"superman", ratings:4}
    ])
    const changeMovies = ()=>{
        setMovies(movies.map((m) => m.id===1 ? {...m, title: "john wick"}: m))
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>



        {friends.map((f)=> <li key={Math.random()}>
            {f}
        </li>)}
        <button onClick={addOneFriend}>Add friend</button>
        <button onClick={removeFriend}>Remove friend</button>
        <button onClick={updateFriend}>Uddate one friend</button>

        <h1>movie title: {movie.title}</h1>
        <p> ratings: {movie.ratings}</p>
        <button onClick={handleClick}>Change rating</button>

        <div>
            {movies.map((item)=>
            <div key={Math.random()}>
                <p>{item.title}</p>
                 <p>{item.ratings}</p>
            </div>)}
        </div>
        <button onClick={changeMovies}>Change name</button>
    </div>
  )
}

export default UseState