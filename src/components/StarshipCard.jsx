export default function StarshipCard({ starship }) {
    return (
      <li>
        <h3>{starship.name}</h3>
        <p>Model: {starship.model}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
      </li>
    );
  }
  