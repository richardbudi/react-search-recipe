import React, {Component} from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

class RecipeList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      value,
      handleChange,
      handleSubmit,
      error,
    } = this.props;
    return (
      <React.Fragment>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="container my-3">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3" />
            <div className="row">
              {error ? (
                <h1 className="text-danger text-center">{error}</h1>
              ) : (
                recipes.map(recipe => {
                  return (
                    <Recipe
                      handleDetails={() => handleDetails(0, recipe.recipe_id)}
                      key={recipe.recipe_id}
                      recipe={recipe}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeList;
