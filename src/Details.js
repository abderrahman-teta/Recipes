import {useParams,useNavigate} from 'react-router-dom';
import {useEffect ,useState} from 'react';

const Details = () => {
    const {id} = useParams()
     
    const [recipe, setRecipe] = useState("");
    const [load, setLoad] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('http://localhost:8000/recipes/'+id)
        .then(response =>response.json())
        .then(data =>setRecipe(data))
        
        
      },[id])
    
    const ingredients = recipe.ingredients
   const handelClick = () =>{
    navigate(-1)
   }
    return ( 
<div className="recipe_detail">
        <h2>{recipe.name}</h2>
        <ul>
        {ingredients && ingredients.map(ingredient => {
       return( <li key={ingredient}>
           <label>{ingredient}</label>
           <input type="checkbox"  />
       </li>)}
        )}
        </ul>

        <div className="instructions">
          <h3>Instructions:</h3>
          <p>{recipe.instructions}</p>  
        </div>

        <div className="btn">
        <button className='button' onClick={handelClick}>←Back</button>
        
        </div>
        
</div>
        );
}
 
export default Details;