import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Greeting from './components/Greeting';
import Layout from './components/Layout';
import { fetchMessage } from './redux/messages/messageSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Greeting />} />
      </Route>
    </Routes>
  );
}

export default App;
