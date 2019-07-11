import React, {Component} from 'react';
import {recipe} from '../tempDetails';

class RecipeDetails extends Component {
  state = {
    recipe: recipe,
  };
  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=dfefb26e6baf70f86eb1c032f7c57c53&rId=${id}`;
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      this.setState(
        () => {
          return {recipe: jsonData.recipe};
        },
        () => {}
      );
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients,
    } = this.state.recipe;

    const {handleIndex} = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <button
                type="button"
                className="btn btn-warning mb-5 text-capitalize"
                onClick={() => handleIndex(1)}>
                back to recipe
              </button>
              <img src={image_url} className="d-block w-100" alt="recipe" />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase56">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                target="_blank"
                className="btn btn-primary mt-2 text-capitalize">
                publisher webpage
              </a>
              <a
                href={source_url}
                target="_blank"
                className="btn btn-success mt-2 text-capitalize mx-3">
                recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {ingredients.map((item, index) => {
                  return (
                    <li className="list-group-item text-slanted" key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RecipeDetails;
