import React from 'react';
import { BsCheck } from 'react-icons/bs';
import cn from 'classnames';

const Check = ({ isCompleted }) => {
  return (
    <div
      className={cn(
        `border-2 rounded-lg  border-pink-600  w-6 h-6 mr-2 flex items-center`,
        {
          'bg-pink-400': isCompleted,
        }
      )}
    >
      {isCompleted && <BsCheck size={24} className='text-gray-800' />}
    </div>
  );
};

export default Check;

// <div
// className={`border-2 rounded-lg  border-pink-600 ${
//   isCompleted ? 'bg-pink-400' : ''
// } w-6 h-6 mr-2 flex items-center`}
// >
// {isCompleted && <BsCheck size={24} className='text-gray-800' />}
// </div>
