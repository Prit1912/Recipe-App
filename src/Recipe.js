import React from 'react'
import style from "./Recipe.module.css"

export default function Recipe(props) {
    return (
        <div className = {style.recipe}>
            <h1>{props.title}</h1>
            <ol>
                {
                    props.ingredients.map(ingredient =>{
                        return <li>{ingredient.text}</li>
                    })
                }
            </ol>
            <p>Calories: {props.calories.toFixed(2)}</p>
            <img className = {style.image} src = {props.image} alt = ""></img>
        </div>
    )
}
