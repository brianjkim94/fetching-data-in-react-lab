import StarshipCard from './StarshipCard';

export default function StarshipList({ starships }) {
  return (
    <div>
      {starships.map((starship) => (
        <section key={starship.name} className="starship-section">
          <StarshipCard starship={starship} />
        </section>
      ))}
    </div>
  );
}
