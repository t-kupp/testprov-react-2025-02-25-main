// 2. Byt plats med callback funktion
// Visa listan med namn genom att rendera en komponent User för varje namn.
// Komponenten User ska ha en knapp brevid namnet där det står "flytta fram"
// När man klickar på knappen ska namnet byta plats med namnet framför i listan.
// Det sista namnet i listan ska inte ha en knapp.

export default function Question2() {
  const [users, setUsers] = useState(["Fred", "Sven", "Anna", "Per"]);

  return (
    <div>
      <h1>Question 2</h1>
    </div>
  );
}
