const Button =()=>{
    return <button onClick={()=>console.log("you clicked me!")}>Click</button>
}

const Events = () => {
    const copyHandler = ()=> console.log("do not steal my content!");
    function moveHandler(){
        alert("mouse moved");
        console.log("mouse moved");
    }
  return (
    <>
    <div><Button/></div>
    <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, qui 
        porro ipsam excepturi libero accusamus obcaecati perferendis, 
        distinctio optio sed possimus facilis eum iusto animi illum dolore
         laudantium aliquid fugit?</p>
    <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo?</p>
    
    </>
  )
}

export default Events