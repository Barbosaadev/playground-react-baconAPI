import React, { useState, useEffect } from "react";
import { Output } from "./components/Ipsum";
import './Generator.css'

function App() {
  const [ paragraphs, setParagraphs ] = useState([]);
  const [ paragraphsValue, setParagraphsValue ] = useState(5);
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState('')


  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${paragraphsValue}&start-with-lorem=1`;



    fetch(url)
      .then((res) => res.json())
      .then((data) => setParagraphs(data))
      .catch(error => {
        console.error("Erro no fetch:", error)
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  },[ paragraphsValue ]);

  if (loading) return (
    <div className="loading__container">
      <h1 className="loading__title">
        Loading...
      </h1>
    </div>
  )
  if (error) return "Error!"

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Bacon Ipsum Generator API</h1>
        </div>
        {loading ? <Output paragraphs={paragraphs}/> : null}
        {!loading ? <Output paragraphs={paragraphs}/> : null}
      </div>
    </div>
  );
}

export default App;
