import {Link} from 'react-router-dom';
const Recipe = ({recipe}) => {
    return ( 
        <div className="recipe" key={recipe.id}>
          <h2>{recipe.name}</h2>
          <div className="tags">
          {recipe.tags.map(tag =>{
            return <Link to={"/reacipelist/tag/"+tag} key={tag} className="tag" >{tag}</Link>
          })}
          </div>
          <Link to={"/reacipelist/"+recipe.id} className="btn">Show details</Link>
        </div>
     );
}
 
export default Recipe;