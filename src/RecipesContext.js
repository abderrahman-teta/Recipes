import {createContext} from 'react';
import {useEffect ,useState} from 'react';
export const RecipesContext = createContext(); 
export const RecipesProvider = (props) =>{
    const [list,setList] = useState([]);
    const [pending, setPending] = useState(true)
    useEffect(()=>{
      fetch('http://localhost:8000/recipes/')
      .then(response =>response.json())
      .then(data =>{
         setList(data);
         setPending(false);
        })
      
    },[])
    return (
        <RecipesContext.Provider value={{value1:[list,setList],value2:[pending, setPending]}}>
            {props.children}
        </RecipesContext.Provider>
    )
}

