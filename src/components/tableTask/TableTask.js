import React, { useEffect, useState } from "react";
import axios from "axios";

const TableTask =() => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await axios.get("http://localhost:5005/get-tasks");
    console.log(res.data);
    setTasks(res.data);
  };

  useEffect(() => {
    getTasks();
  }, []);


  const HandlerRetchTickets= async()=>{
    const res = await axios.get("http://localhost:5005/reloadData");
    console.log(res.data);
    setTasks(res.data);
    console.log('reloading data....');
  };


  return (
    <div className="container-flued px-5 py-4">
      <h2 className="text-center">Jira Show Tickets </h2>
      <button type="button" className="btn btn-primary mb-4" onClick={HandlerRetchTickets}>ReFetch Tickets</button>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col" className="text-center">Name</th>
            <th scope="col" className="text-center">Description</th>
            <th scope="col" className="text-center">Reporter</th>
            <th scope="col" className="text-center">Status</th>
            <th scope="col">Due date</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td className="text-center">{task.title}</td>
                <td className="text-center">{task.description}</td>
                <td className="text-center">{task.reporter}</td>
                <td className="text-center">{task.status}</td>
                <td>{task.dueDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTask;
