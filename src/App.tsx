import { Heading } from './components/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
      <Heading>
        Olá Mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
        recusandae beatae quibusdam mollitia inventore ullam ducimus commodi
        culpa architecto praesentium! Voluptatem incidunt assumenda facere vitae
        reprehenderit necessitatibus, impedit ad labore.
      </p>
    </>
  );
}

export default App;
