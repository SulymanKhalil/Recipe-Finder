import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetails = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
            )
            const data = await res.json();
            setRecipe(data.meals[0])
        };
        fetchRecipe();
    }, [id])

    if (!recipe) return <p className="text-center text-warning mt-5">Loading recipe...</p>

    return (
        <div className="container mt-5">
            <Link className="btn btn-outline-warning mb-4 rounded-pill px-4 fw-semibold" to="/">← Back to Home</Link>
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden mx-auto w-100 w-md-75 w-lg-50" style={{maxWidth: "600px"}}>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="card-img-top img-fluid"/>
                <div className="card-body p-4">
                    <h3 className="text-warning fw-bold">{recipe.strMeal}</h3>
                    <h5 className="text-center fs-5">{recipe.strArea} Recipe • {recipe.strCategory}</h5>
                    <p className="mt-3">{recipe.strInstructions}</p>
                    {recipe.strYoutube && (
                        <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" className="btn fs-6 btn-warning mt-3 fw-semibold px-4">
                            ▶ Watch on YouTube
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails;