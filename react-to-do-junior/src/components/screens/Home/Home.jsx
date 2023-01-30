import React from 'react';
import Items from './item/Items';

const data = [
  { _id: '59394', title: 'Finish the essay collaboration', isCompleted: false },
  { _id: '23047', title: 'Read next chapter of the book', isCompleted: false },
  { _id: '94753', title: 'Walk 5 km in the forest', isCompleted: false },
];

const Home = () => {
  const [todos, setTodos] = React.useState(data);

  const changeTodo = id => {
    const copy = [...todos];
    const current = copy.find(t => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = id => {
    console.log([...todos].filter(t => t._id !== id));
    setTodos([...todos].filter(t => t._id !== id));
    console.log(todos)
  };

  return (
    <div className=' text-gray-300 w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-10 '>Todo for Junior</h1>
      {todos.map(oneTodo => (
        <Items
          key={oneTodo._id}
          todo={oneTodo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
