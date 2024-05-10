const Board = ({ task, index, taskList, setTaskList }) => {
    const handleDelete = () => {
        const updatedTaskList = taskList.filter(item => item !== task);
        setTaskList(updatedTaskList);
    };

    return (
        <div className="flex flex-col items-center justify-start border max-w-xl text-center text-lg pt-3 pb-4 md:px-6">
            <p>{task}</p>
            <button 
                className="bg-red-500 text-white rounded-lg py-1 px-2"
                onClick={handleDelete}
            > 
                Delete
            </button>
        </div>
    );
};

export default Board;
