import React, { useState, useEffect } from 'react';
import './styles.css';

import { Card } from '../../components/Card'

export function Home() {
  const [tarefasName, setTarefasName] = useState();
  const [tarefas, setTarefas] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '' });

  function handleAddTarefas(){
    const newTarefa = {
      name: tarefasName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setTarefas(prevState => [...prevState, newTarefa]);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/omarceloz");
      const data = await response.json();

      setUser({
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Todolist</h1>
        <div className='profile-container'>
          <img src={user.avatar} alt='Profile Photo' />
        </div>
      </header>
      

      <input 
        type="text" 
        placeholder="Digite uma tarefa..."
        onChange={e => setTarefasName(e.target.value)}
      />

      <button type="button" className='button-add' onClick={handleAddTarefas}>Criar</button>

      {
        tarefas.map(tarefas => (
          <Card
          key={tarefas.time}
          name={tarefas.name} 
          time={tarefas.time} 
          />
        ))
      }

    </div>
  )
}

