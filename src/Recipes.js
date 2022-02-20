import Recipe from './Recipe'

const Recipes = ({list}) =>{ 
  
  return (<>
   
    {list && list.map(recipe =>{
      return (
        <Recipe recipe={recipe} key={recipe.id} />
      )
    })}
  
    </>
      )
      
    
  
}

export default Recipes;
