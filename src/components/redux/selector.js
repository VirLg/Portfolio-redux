import { statusFilter } from './constants';
import { useSelector } from 'react-redux';

// export const ToDo = () => {
//   const value = useSelector((state = state.status.filter));
// };
export const getTasks = state => state.tasks;
export const getStatusFilter = state => state.filters.status;

export const StatusFilter = () => {
  const filter = useSelector(state => state.filters.status);
  return (
    <div>
      <button selected={filter === statusFilter.all}>All</button>
      <button selected={filter === statusFilter.active}>Active</button>
      <button selected={filter === statusFilter.completed}>Completed</button>
    </div>
  );
};
