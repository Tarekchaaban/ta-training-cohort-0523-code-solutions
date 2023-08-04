import TaskManager from './TaskManager';
import './App.css';

const tasks = [
  {
    id: 1,
    name: 'Finish exercises',
    completed: false,
  },
  {
    id: 2,
    name: 'Design my final project',
    completed: false,
  },
  {
    id: 3,
    name: 'Implement my final project',
    completed: false,
  },
  {
    id: 4,
    name: 'Prepare for interviews',
    completed: false,
  },
  {
    id: 5,
    name: 'Apply for jobs',
    completed: false,
  },
  {
    id: 6,
    name: 'Interview, interview, interview',
    completed: false,
  },
  {
    id: 7,
    name: 'Get a job offer',
    completed: false,
  },
  {
    id: 8,
    name: 'Accept the offer',
    completed: false,
  },
  {
    id: 9,
    name: 'Start work',
    completed: false,
  },
  {
    id: 10,
    name: 'Onboard quickly',
    completed: false,
  },
  {
    id: 11,
    name: 'Have a great career!',
    completed: false,
  },
];

export default function App() {
  return (
    <div style={{ margin: 20 }}>
      <TaskManager tasks={tasks} />
    </div>
  );
}
