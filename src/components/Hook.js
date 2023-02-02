import React, { useState } from "react";



const Hook = props =>{

    const [fruitState, setFruitState] = useState({
        fruits:[
            {name:'Mango',weight:'120gm'},
            {name:'Apple',weight:'20gm'},
            {name:'Orange',weight:'60gm'},
        ]
    });
    const clickHandler = () => {
        // console.log('Hello Easy Learning');
        // alert('Welcome to Easy Learning')
        setFruitState({
            fruits:[
                {name:'Samsung',weight:'120gm'},
                {name:'Nokia',weight:'20gm'},
                {name:'Redmi',weight:'60gm'},
            ]
        })
    }
        return (
        <div>
            <button onClick={clickHandler}>Change Me!</button>
            <h1>Fruit Name is {fruitState.fruits[0].name}</h1>
            <h1>Fruit Name is {fruitState.fruits[1].name}</h1>
            <h1>Fruit Name is {fruitState.fruits[2].name}</h1>
            </div>
            )
    }

export default Hook;
