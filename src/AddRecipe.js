import './Addrecipe.scss';
import {useState,useContext,useRef} from 'react';
import { RecipesContext } from "./RecipesContext";
const AddRecipe = () => {
    const [recipeName, setRecipeName] = useState('');
    const [recipeInstructions, setInstructions] = useState(''); 
    const Name = useRef('');
    const Instructions = useRef('');
    const {value1} = useContext(RecipesContext);
    const [list, setList] = value1;
    const checkBoxs = document.querySelectorAll('.check')
    console.log(checkBoxs);
    const handelClick = () =>{
        checkBoxs.forEach(element => {
            console.log(element);
        });
        console.log(Name.current.value);
        console.log(Instructions.current.value);
        const newRecipe = {
            Name:Name.current.value,
            Instructions:Instructions.current.value
        }
  
        const Post = async () => {
            const rawResponse = await fetch('http://localhost:8000/recipes/', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(newRecipe)
              })
              .catch(err =>{
                  console.log(err);
              })
              const content = await rawResponse.json();
            
              console.log(content);
        }
        Post()
    }
    return (
        <div className="add_recipe">
            <h1 className="title">This is add recipe page</h1>
            
                <div className="controler">
                    <label htmlFor="">Recipe Name </label>
                    <input type="text" ref={Name} />
                </div>
                
                <div className="controler">
                    <label htmlFor="">instructions</label>
                    <textarea cols="30" rows="10" ref={Instructions}></textarea>
                </div>
                <div className="controler">
                   <label htmlFor="main">Main</label>
                   <input type="checkbox" id="main" className='check'/>

                   <label htmlFor="wine">Wine</label>
                   <input type="checkbox" id="wine" className='check'/>

                   <label htmlFor="seafood">Seafood</label>
                   <input type="checkbox" id="seafood" className='check'/>

                </div>
                <div className="controler">
                    <button onClick={handelClick} >Save</button>
                </div>
            
        </div>
    )
}
export default AddRecipe;