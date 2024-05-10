import Board from './component/board';
import { useState } from 'react';
import Input from './component/input';

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);

  return (
    <div className='px-12'>
      <div className='flex flex-col items-center py-8 gap-4 justify-center'>
        <h1 className='text-xl font-semibold'>ToDo board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div className='flex flex-col gap-4 sm:grid grid-cols-3 sm:px-8 md:px-18 lg:px-12'>
        {taskList.map((task, index) => (
          <Board index={index}taskList={taskList} setTaskList={setTaskList} key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;
