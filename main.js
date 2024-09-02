ReactDOM.createRoot(document.getElementById("root")).render(<App />);
function App() {
  const [counters,setCounters] = React.useState([])
  const sum = counters.reduce((a,c)=>a+c,0)
  const addCounters = ()=> setCounters([...counters,0])
  const delCounters = (index)=> setCounters(counters.filter((_,i)=>index !== i))
  const updateCounters = (index,amount)=> setCounters(counters.map((count,i)=>
    index === i ? count+=amount:count))
  return(
    <div className="main" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1 >Total={sum}</h1>
      <button onClick={addCounters} style={{minWidth:'120px'}}>Add</button>
      <div>
      {counters.map((counter,index)=><Counter 
      key={index}
      index={index}
      value={counter}
      delCounters={delCounters}
      updateCounters={updateCounters}
      />)}
      </div>
    </div>
  )
}

function Counter({index,value,delCounters,updateCounters}) {
  return (
    <div className="counter">
      <button onClick={()=>updateCounters(index,-1)}>-</button>
      <h3>{value}</h3>
      <button onClick={()=>updateCounters(index,1)}>+</button>
      <button onClick={()=>updateCounters(index,-value)}>C</button>
      <button onClick={()=>delCounters(index)}>X</button>
    </div>
  )
}