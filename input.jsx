import { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input]);
        setInput(""); // Reset input field after adding task
    };

    return (
        <>
            <form className="flex flex-row items-center gap-3" onSubmit={handleAddTask}>
                <input
                    className="border rounded-lg py-1.5 px-2.5 text-lg"
                    type="text"
                    placeholder="Add a task"
                    value={input}
                    onChange={handleInputChange} // Add onChange event handler
                />
                <button
                    className="bg-violet-400 text-white py-2 px-3.5 rounded-lg hover:opacity-70 font-semibold"
                    type="submit"
                >
                    Add
                </button>
            </form>
        </>
    );
};

export default Input;
