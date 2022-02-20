import {useEffect ,useState,useMemo} from 'react';
import Recipes from './Recipes';
const Home = () => {
    const [list,setList] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:8000/recipes')
      .then(response =>response.json())
      .then(data =>setList(data))
      
    },[])
    const listMemo = useMemo(()=>{
        return list
    },[list])

   console.log(listMemo);
    return ( 
    <h1>This is Home</h1>
    );
}
 
export default Home;