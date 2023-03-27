import React, { useState } from 'react';
import '@/app.css';
import '@/app.less';
import Class from './components/Class';
import { Demo1 } from './components';

function App() {
  const [count, setCounts] = useState('');
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  return (
    <>
      <Class></Class>
      <h2>修改后的文本来咯11</h2>
      <p>受控组件</p>
      <input type='text' value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <input type='text' />
      const a=1111
      <Demo1></Demo1>
    </>
  );
}
export default App;
