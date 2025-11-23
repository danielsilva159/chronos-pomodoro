import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime} min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime} min</span>,
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoWhenActiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime} min</span>,
    shortBreakTime: (
      <span>Próximo ciclo é de {state.config.shortBreakTime} min</span>
    ),
    longBreakTime: <span>Próximo descanso será longo</span>,
  };

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoWhenActiveTask[nextCycleType]}
    </>
  );
}
