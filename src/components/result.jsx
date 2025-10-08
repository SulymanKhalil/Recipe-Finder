import { Link } from "react-router-dom";

const Result = ({ recipes, hasSearched, loading }) => {
    if (loading) {
        return <p className="text-warning mt-4">Loading recipes...</p>;
    }
    if (!hasSearched) {
        return <p className="text-secondry mt-4">Type something and search for recipes 🔍</p>;
    }
    if (recipes.length === 0) {
        return <p className="text-danger mt-4">No recipe found, Try seaching another!</p>
    }

    return (
        <div className="container mt-4">
            <div className="row g-4">
                {recipes.map((recipe) => (
                    <div key={recipe.idMeal} className="col-md-4">
                        <div className="card h-100 border-warning shadow">
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} width="200" className="card-img-top rounded-top" />
                            <div className="card-body ">
                                <h5 className="card-title text-warning fw-bold">{recipe.strMeal}</h5>
                                <h6 className="text-info">{recipe.strArea} Recipe</h6>
                                <p className="card-text text-secondry">
                                    <span className="fw-semibold">Instructions:</span> {recipe.strInstructions.slice(0, 100)}...
                                    <Link to={`/recipe/${recipe.idMeal}`}
                                        className="fw-semibold text-dark text-decoration-underline ms-1 shadow-sm">
                                        Read More
                                    </Link>
                                </p>
                                {recipe.strYoutube && (
                                    <a
                                        href={recipe.strYoutube}
                                        target="_blank" rel="noopener noreferrer"
                                        className="btn btn-sm btn-warning fw-semibold mt-2"
                                    >
                                        ▶ Watch on YouTube
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Result;