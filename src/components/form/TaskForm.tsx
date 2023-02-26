import React from 'react';

type Props = {
  btnText: string;
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form>
      <div>
        <label htmlFor="title">Titulo:</label>
        <input type="text" name="title" placeholder="Titulo da Tarefa" />
      </div>
      <div>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input type="text" name="difficulty" placeholder="Dificuldade da Tarefa" />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
}

export default TaskForm;