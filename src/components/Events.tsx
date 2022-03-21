import React, { useRef, useState } from 'react'

const Events: React.FC = () => {
  const [value, SetValue] = useState<string>('');
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChanheHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetValue(event.target.value);
  }

  const clikcHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    console.log(inputRef.current?.value);
  }

  const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('DRUGS')
  }

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDrag(true);
  }

  const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
    console.log('DROP');
  }

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDrag(false);
  }

  return (
    <div style={{marginTop: 30}}>
        <input value={value} onChange={onChanheHandler} type='text' placeholder='Управляемый'/>
        <input ref={inputRef} type='text' placeholder='Неуправляемый'/>
        <button onClick={clikcHandler}>sfsdf</button>
        <div onDrag={dragHandler} draggable style={{marginTop: 15, width: 200, height: 200, background: 'red'}}></div>
        <div 
            onDrop={dropHandler} 
            onDragLeave={dragLeaveHandler}
            onDragOver={dragOverHandler}
            style={{marginTop: 15, width: 200, height: 200, background: isDrag ? 'blue' : 'red'}}></div>
    </div>
  )
}

export default Events