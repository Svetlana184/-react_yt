import React from 'react'

const ExpressionSection = () => {
    const myName = "Korushk";
    const multiple = (a,b) => a*b;
    const specialClass = "simple-class";
    const date = new Date();
    const laptop = {
      name:"Laptop",
      price:1220,
      aviability:"in stock"
    }
  return (
    <section>
        <p>2 + 2 = {2+2}</p>
        <h1>{myName}</h1>
        <p>My friends list: {["Alexx", "Sam"]}</p>
        <p>2*7={multiple(2,7)}</p>
        <p className={specialClass}>This is special class</p>
        <p>{date.toLocaleDateString()}</p>
        <br />
        <br />
        <div>
          <p>Name: {laptop.name}</p>
          <p>price: {laptop.price}</p>
          <p>aviability: {laptop.aviability}</p>
        </div>
    </section>
  )
}

export default ExpressionSection