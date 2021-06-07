import React from 'react';
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";

class Meal extends React.Component {

    state = {
        activeMeal: []
    }

    componentDidMount = async () => {
        const idm = this.props.match.params.id;
        const req = await fetch
            (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idm}`);
        const res = await req.json();
        this.setState({ activeMeal: res.meals[0] });
        console.log(this.state.activeMeal);
    }
    render() {
        const me = this.state.activeMeal;
        return (
            <div className="container ">
                {
                    this.state.activeMeal.length !== 0 &&
                    <div className="row mt-2">
                        <div className="col col-md-7 col-sm-12 mb-2">
                            <div className="active_meal text-center">
                                <img alt={me.strMeal} className="img-fluid active-meal mb-2 " src={me.strMealThumb} />
                                <div className="d-block d_youtube" >
                                    <ReactPlayer url={me.strYoutube} />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-5 col-sm-12">
                            <h3 className="active_meal title text-danger">{me.strMeal}</h3>
                            <h4 className="active_meal category">Category: <span>{me.strCategory}</span></h4>
                            <h5 className="active_meal area">Area: <span>{me.strArea}</span></h5>
                            <p className="active_meal website">Website:
                            <span><a className="btn btn-primary ml-2" href={me.strSource}> Link here</a></span></p>
                            <p className="active_meal text-justify instructions">Instructions:<span> {me.strInstructions}</span></p>
                            <button className="active_meal btn-danger mt-3">
                                <Link to="/">Go home</Link>
                            </button>
                        </div>
                    </div>
                }

            </div>

        );
    }
}



export default Meal;