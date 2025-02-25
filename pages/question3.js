// 3. Komponenter, props och children
// Skapa en Card-komponent som kan användas för att visa olika texter.
// Den ska ta emot title som en prop och använda children för innehållet.
// Använd sedan denna komponent för att visa två olika kort med olika innehåll.

// Exempel på användning:
// <Card title="Välkommen">Detta är en React-komponent!</Card>
// <Card title="Info">React gör det enkelt att bygga UI.</Card>

export default function Question3() {
  return (
    <div>
      <h1>Question 3</h1>
      <Card title='Välkommen'>Detta är en React-komponent!</Card>
      <Card title='Info'>React gör det enkelt att bygga UI.</Card>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className='border p-4 m-4 text-center flex flex-col border-black w-fit rounded'>
      <h3 className='font-bold text-lg'>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
