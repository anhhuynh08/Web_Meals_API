import React from 'react';

const Form = props => (
    <form  className="form__control" onSubmit={props.getMeals} style={{marginBottom:"2rem"}}>
        <input placeholder="Search meal by name"  className="form-control text-danger mb-1" name="mealName" type="text"/>
        <button className="btn btn-outline-danger f-end">Search</button>
    </form>
);
export default Form;


