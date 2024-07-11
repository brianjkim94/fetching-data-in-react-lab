import StarshipCard from './StarshipCard';

export default function StarshipList({ starships }) {
  return (
    <section>
      <ul>
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </ul>
    </section>
  );
}
