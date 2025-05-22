import { useEffect, useState } from 'react'
import './App.css'

function App() {
  
  const [word, setWord] = useState('');
  const [data,setData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!word.trim()) return;

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(resp => resp.json())
    .then(resp => {
      if(Array.isArray(resp)){
        setData(resp[0]);
        setError('');
      }else{
        setData(null);
        setError('Žodis nerastas')
      }
    });
  };

  return (
    <>
      <div className="container">
        <h2>Dictionary</h2>
        <input
         type="text"
         placeholder='Enter word'
         value={word}
         onChange={(e) => setWord(e.target.value)}
         />
         <button onClick={handleSearch}>Ieškoti</button>

         {error && <p>{error}</p>}

         {data && (
          <div className="result">
            <h3>{data.word}</h3>
            {data.phonetic && <p><strong>Tarimas:</strong> {data.phonetic}</p>}
            {data.origin && <p><strong>Kilmė:</strong> {data.origin}</p>}

            <h4>Meaning:</h4>
            <ul>
              {data.meanings.map((meaning, index) => (
                <li key={index}>
                  <em>{meaning.partOfSpeech}</em>: {meaning.definitions?.[0]?.definition || 'Reikšmės nėra'}
                </li>
              ))}
            </ul>
          </div>
         )}
      </div>
    </>
  )
}

export default App
