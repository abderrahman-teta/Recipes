import {useMemo,useContext} from 'react';
import {RecipesContext} from './RecipesContext';
import Recipes from './Recipes';
import Loader from './Loader'
const List = () => {
    const {value1,value2}=useContext(RecipesContext);
    const [pending,setPending]=value2;
    const [list,setList]=value1;
    console.log(pending);
    const listMemo = useMemo(()=>{
        return list
    },[list])

   console.log(listMemo);
    return ( 
    <div className="container">
     { pending?  <Loader />: <Recipes list={listMemo}/> }
    </div> 
    );
}
 
export default List;