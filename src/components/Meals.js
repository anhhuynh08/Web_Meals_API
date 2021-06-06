import React from 'react'
import { Link } from "react-router-dom";
const Meals = (props) => {
    if(props.meals){
        return (
            <div className="container">
                <div className="row">
                   
                    {props.meals.map((meals) => {
                        return (
    
                            <div className="col-md-4 col-sm-6 col-xs-12 shadow p-3 mb-5 bg-body rounded ">
                                <div key={meals.idMeal} className="meal__box" style={{ marginBottom: "2rem" }}>
                                    <img className="meal__box img-fluid" src={meals.strMealThumb} alt="" />
                                    <div className="meal__text">
                                        <h5 className="meal_title">{meals.strMeal.length < 20 ? `${meals.strMeal}` : `${meals.strMeal.substring(0, 25)}...`}</h5>
                                        <p className="meal__categoty">Category: <span>
                                            {meals.strCategory}
                                        </span>
    
                                        </p>
                                    </div>
                                    <button className="meal__buttons btn-warning">
                                        <Link to={{
                                            pathname: `/meal/${meals.idMeal}`,
                                            state: { meal: meals.strMeal }
                                        }}>View Meal</Link>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    else{
        return(
            <div>No results</div>
        );
    }
    
}

export default Meals
