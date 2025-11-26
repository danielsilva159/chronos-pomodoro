import { MessagesContainer } from './components/MessagesContainer';
import { TaskContextProvide } from './contexts/TaskContext/TaskContextProvider';
import { MainRouter } from './routes/MainRouter';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <TaskContextProvide>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvide>
  );
}
