import React, { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <div>
        <Header title="Aplicação 1" subtitle="Aprendendo conceito de Props">
          Testando Children
        </Header>
        <h1>
          {`Meu número: ${contador}`}
        </h1>
        <Button
          onClick={() => setContador(contador + 1)}
          type="button"
        >
          Adicionar
        </Button>
        <Button
          onClick={() => setContador(contador - 1)}
          type="button"
        >
          Diminuir
        </Button>
      </div>
    </div>
  );
};
export default App;
