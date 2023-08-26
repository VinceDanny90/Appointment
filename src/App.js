import List from "./List";
import data from "./Data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data)
  
  const reloadItem = () =>{
    setPeople(data)
  };

  const removeItem = (id) =>{
    setPeople(oldValue => {
      return oldValue.filter( value => value.id !== id);
    });
  };

  return (
    <section>
      <div className='container'>
        <h2 style={{color: 'var(--bg-blue)'}}>
          Appuntamenti
        </h2>
        <div className='people-list'>
          <List data={people} removeItem={removeItem}/>
        </div>
        <div className='btn-group'>
          <button className="btn btn-reset" onClick={reloadItem}>Ricarica</button>
          <button className="btn btn-delete"
          onClick={() => setPeople([])}>Elimina Tutto</button>
        </div>
      </div>
    </section>
  );
}

export default App;
