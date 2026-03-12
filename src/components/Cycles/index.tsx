import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./style.module.css";

export const Cycles = () => {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

   const cycleDescripitionMap = {
    workTime:'foco',
    shortBreakTime:'descanso curto',
    longBreakTime:'descanso longo'
   } 

  return (
    <div className={styles.cycles}>
      <span>Ciclos</span>

      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}  
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescripitionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescripitionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};
