import React, { useState } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import Todo from "../../components/cards/TodoCard";
import styled from "styled-components";

const TodosPage = () => {
  const [tasks, setTask] = useState([]);

  const handleDelete = (id) => setTask(tasks.filter((task) => task.id !== id));

  const formik = useFormik({
    initialValues: {
      task: "",
      date: "",
      reminder: false,
    },
    onSubmit: (values) => {
      const { task, date, reminder } = values;
      setTask([...tasks, { id: uuidv4(), task, date, reminder }]);
    },
  });

  return (
    <Wrapper>
      <form onSubmit={formik.handleSubmit}>
        <label>
          <p>Todos</p>
          <input
            type="text"
            id="task"
            autoComplete="off"
            placeholder="Do the dishes..."
            onChange={formik.handleChange}
            value={formik.values.task}
            style={formik.errors.task ? { border: "solid 1px red" } : null}
          />
        </label>
        <label>
          <p> Date & Time</p>
          <input
            type="date"
            id="date"
            className="datetime-input"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
        </label>

        <div className="checkbox-input">
          <p>Set Reminder</p>
          <input
            type="checkbox"
            id="reminder"
            onChange={formik.handleChange}
            value={formik.values.toggle}
          />
        </div>

        <button type="submit" className="submit-btn">
          Save Task
        </button>
      </form>
      <h2>Todos</h2>
      {tasks.length ? (
        tasks.map((val) => (
          <Todo task={val} key={val.id} onDelete={handleDelete} />
        ))
      ) : (
        <p style={{ opacity: 0.6 }}>You have no tasks!!</p>
      )}
    </Wrapper>
  );
};

export default TodosPage;

const Wrapper = styled.div`
  margin-top: 24px;
  padding-left: 18px;
  padding-right: 18px;
  height: auto;
  padding-bottom: 32px;
  h2 {
    font-size: 18px;
    margin: 32px 0;
  }

  .logo-wrapper {
    display: flex;
    margin-bottom: 32px;
    padding-top: 32px;
  }

  .logo {
    font-size: 20px;
    padding-right: 14px;
  }

  form {
    /* padding-left: 20px; */
    height: auto;
    /* border-radius: 7px; */
    /* background-color: white; */
    padding-bottom: 32px;
    margin-bottom: 42px;
    width: 100%;
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-bottom: 16px;
  }
  label input {
    width: 100%;
    height: 50px;
    background-color: #edeff2;
    border-radius: 12px;
    padding-left: 12px;
    border: inherit;
  }
  label p {
    margin-bottom: 8px;
    opacity: 0.8;
  }

  ::placeholder {
    font-size: 12px;
    color: #131313;
    opacity: 0.5;
  }

  input[type="date"] {
    /* opacity: 0.5; */

    background: #dfdfdf;
  }

  .checkbox-input {
    display: flex;
    align-items: center;
    padding-bottom: 24px;
  }
  .checkbox-input p {
    padding-right: 8px;
    font-size: 12px;
    opacity: 0.8;
  }

  .submit-btn {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    background-color: #06942a;
    color: white;
    border: none;
  }

  @media (min-width: 600px) {
    width: 70vw;
    margin: 0 auto;
    margin-top: 50px;
  }
`;
