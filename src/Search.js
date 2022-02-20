import { RecipesContext } from "./RecipesContext";
import { useContext ,useState} from "react";
import Recipes from './Recipes';
import './Search.scss';
const Search = () =>{
    const {value1} = useContext(RecipesContext);
    const [list, setList] = value1;
    const [search, setSearch] = useState(list)
    const handleChange = (e) =>{
        if(e.target.value ===""){
            setSearch(list)
        }else {

            const searched = search.filter(recipe =>{
                let value = e.target.value;
                const name = value.charAt(0).toUpperCase() + value.slice(1); 
                return recipe.name.includes(name)
            })
            setSearch(searched)
        }
        
        
        
    }
    
    return (
        <div className="search" >
            <div className="bar">
             <input type="text" placeholder="search here" onChange={handleChange}/>
            </div>
            
            
            <div className="search_content">
             <Recipes list={search}/>
            </div>
            
        </div>
    )
}
export default Search;