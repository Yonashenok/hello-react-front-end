import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from '../redux/messages/messageSlice';

function Greeting() {
  const { greeting } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  return (
    <div className="justify-center flex items-center flex-col h-screen bg-green-100">
      <h2 className="text-neutral-800 underline mb-12 text-4xl">
        This is greeting from API
      </h2>
      <button
        onClick={() => dispatch(fetchMessage())}
        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none mb-14 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Random greeting
      </button>
      <h1 className="text-xl text-neutral-800">{greeting.greeting}</h1>
    </div>
  );
}

export default Greeting;
