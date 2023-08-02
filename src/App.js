import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

const testList = ["listItems"]
const testStr = "listItems"

function App() {
  const [listTitle, setListTitle] = useState('My List');

  let testRandom = (Math.random())
  console.log(testRandom)

  const changeTitleHandler = useCallback( () => {
    let test = 'New Title' + testRandom
    console.log("useCallback " + test)
    setListTitle(test);
  }, [testRandom]);

  console.log("ap")

  const listItems = useMemo(() => [5, 3, 1, 10, 9, testRandom], []);
  // const listItems = [5, 3, 1, 10, 9, testRandom];

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      {/* <DemoList title={testStr} items={testList} /> */}
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
