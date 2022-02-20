import { RecipesContext } from "./RecipesContext";
import { useContext ,useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Recipes from './Recipes';
import './Tag.scss';
const Tag = () =>{
    const {value1} = useContext(RecipesContext);
    const {tag} = useParams();
    const [list, setList] = value1;
    const [search, setSearch] = useState(list)
    useEffect(()=>{
        const searched = list.filter(recipe =>{
            return recipe.tags.includes(tag)
        })
        console.log(searched);
        setSearch(searched)
    },[tag])
     
    return (
       <div>
           <h1 className="tag_title">Recipe with tag : {tag}</h1>
           <div className="container">
           
          <Recipes list={search}/>
           </div>
           
       </div>
             
    )
}
export default Tag;