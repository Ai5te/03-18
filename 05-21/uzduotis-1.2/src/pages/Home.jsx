import { useEffect, useState } from "react";
import { useParams } from 'react-router';


export default () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    useEffect(() => {
        const url = id
            ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            : 'https://www.themealdb.com/api/json/v1/1/random.php';

        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            setMeal(data.meals[0]);
        });
    }, [id]);

    if (!meal) return <p>Loading...</p>;

    const formatIngredients = (meal) => {
        console.log(meal);

        const res = [];

        for(let i = 1; i <= 20; i++) {
            if(meal['strIngredient' + i].trim())
                res[res.length] = <li key={i}>{meal['strIngredient' + i]} {meal['strMeasure' + i]}</li>
        }

        return res;
    };


    return (
        <div className="container">
            {/* <h2>Random meal</h2> */}
            {meal && (
                <div className="d-flex justify-content-center align-items-center">            
                    <div>
                        <img src={meal.strMealThumb} alt={meal.strMeal}  style={{ width: '100%' }}/>
                    </div>
                    <div style={{ width: '100%' }} className="ps-3">
                        <h3>{meal.strMeal}</h3>
                        <p>Category: {meal.strCategory}</p>
                        <p>Country of origin: {meal.strArea}</p>
                        {/* <p>Instructions: {meal.strInstructions}</p> */}
                        <h4>Ingredients:</h4>
                            <ul>
                                {formatIngredients(meal)}
                            </ul>
                    </div>
                    
                    
                </div>
            )}
        </div>
    );
}