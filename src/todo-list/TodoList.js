import "./TodoList.css";
const TodoList = (props) => {
  console.log(props.dataTodos);
  return (
    <ul>
      {props.dataTodos.map((e) => {
        return <li key={e.id}>{e.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
