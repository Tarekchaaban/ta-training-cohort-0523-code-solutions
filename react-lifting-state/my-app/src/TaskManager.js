import React, { useState, useCallback, useEffect } from 'react';

/**
 * Manages outstanding and completed tasks.
 * Outstanding and completed tasks are displayed in separate lists.
 * Displayed tasks can be filtered using the Filter input. Only tasks
 * whose name matches the filter value are displayed in either list.
 * Props:
 *   - tasks, an Array of { id: number, name: string, completed: boolean }
 * TODO: It doesn't work!
 */
export default function TaskManager({ tasks }) {
  const [filter, setFilter] = useState('');
  const [outstandingTasks, setOutstandingTasks] = useState();
  const [completedTasks, setCompletedTasks] = useState();

  const findOutstandingTasks = useCallback(() => {
    return tasks.filter((t) => !t.completed && t.name.includes(filter));
  }, [tasks, filter]);
  const findCompletedTasks = useCallback(() => {
    return tasks.filter((t) => t.completed && t.name.includes(filter));
  }, [tasks, filter]);

  useEffect(() => {
    setOutstandingTasks(findOutstandingTasks());
    setCompletedTasks(findCompletedTasks());
  }, [findCompletedTasks, findOutstandingTasks]);

  function handleComplete(task) {
    task.completed = true;
    setOutstandingTasks(findOutstandingTasks());
    setCompletedTasks(findCompletedTasks());
  }
  if (!outstandingTasks || !completedTasks) return <div>Loading...</div>;
  return (
    <div>
      <Filter value={filter} onChange={setFilter} />
      <div>
        <OutstandingTasks
          tasks={outstandingTasks}
          onComplete={handleComplete}
        />
        <CompletedTasks tasks={completedTasks} />
      </div>
    </div>
  );
}

/**
 * An input field that can be used to filter a list of items.
 */
function Filter({ filter, onChange }) {
  return (
    <div>
      <span>Filter: </span>
      <input
        type="text"
        value={filter}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

/**
 * An array of tasks with a checkbox to indicate they are completed.
 * Props:
 *   - tasks, the tasks to display
 */
function OutstandingTasks({ tasks, onComplete }) {
  // Tracks completed state of all tasks. key = task.id, value = task.completed
  if (tasks.length === 0) return <div>No outstanding tasks.</div>;
  return (
    <div>
      <div>Outstanding Tasks</div>
      <ul style={{ listStyleType: 'none' }}>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onComplete(task)}
              />
              <span>{task.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * An array of tasks.
 * Props:
 *   - tasks, the tasks to display
 */
function CompletedTasks({ tasks }) {
  if (tasks.length === 0) return <div>No completed tasks.</div>;
  return (
    <div>
      <div>Completed Tasks</div>
      <ul style={{ listStyleType: 'none' }}>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
