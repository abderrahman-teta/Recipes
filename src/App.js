import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {RecipesProvider} from './RecipesContext';
import Home from './Home';
import Details from './Details';
import NavBar from './NavBar';
import List from './List';
import Search from './Search';
import Tag from './Tag';
import AddRecipe from './AddRecipe';
function App() {

  return (
    <Router>
    <RecipesProvider> 
    <div className="App">
      <NavBar />
      <div className="content">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/reacipelist" element={<List />} />
        <Route path="/reacipelist/tag/:tag" element={<Tag />} />
      {/*   <Route path="/addrecipe" element ={<AddRecipe />} /> */}
        <Route path="/reacipelist/:id" element={<Details />} />

      </Routes>
      </div>
    </div>
    </RecipesProvider> 
    </Router>

  );
}

export default App;
