import { useState, useEffect } from 'react';
import { getStarships } from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';

function App() {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const data = await getStarships();
        setStarships(data);
        setFilteredStarships(data);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    }

    fetchStarships();
  }, []);

  const handleSearch = (query) => {
    const filtered = starships.filter((starship) => 
      starship.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  return (
    <main>
      <h1>Starship Explorer</h1>
      <StarshipSearch onSearch={handleSearch} />
      {filteredStarships.length ? (
        <StarshipList starships={filteredStarships} />
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default App;
