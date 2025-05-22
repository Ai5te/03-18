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

    return (
        <div className="container">
            <h2>Random meal</h2>
            {meal && (
                <div>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h3>{meal.strMeal}</h3>
                    <p>Category: {meal.strCategory}</p>
                    <p>Country of origin: {meal.strArea}</p>
                    <p>Instructions: {meal.strInstructions.slice(0, 200)}...</p>
                    
                </div>
            )}
        </div>
    );
}