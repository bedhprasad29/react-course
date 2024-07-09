import { useEffect, useState } from 'react';
import './App.css';
import RecipeList from './RecipeList'
import SearchBar from './SearchBar';

function App() {
  const [keyword, setKeyword] = useState('');
  const [recipies, setRecipies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.example.com/recipes?keyword=${keyword}`);
      const data = await response.json();
      console.log(data);
    }
  })

  return (
    <div className="App">
      <h1>Recipe Search App</h1>
      <SearchBar />
      <RecipeList recipies={recipies} />
    </div>
  );
}

export default App;
