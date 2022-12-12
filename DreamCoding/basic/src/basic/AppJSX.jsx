import './style/AppJSX.css';

function AppJSX() {
  const name = '영택';
  const list =['HTML', 'CSS', 'JavaScript', 'React'];
  
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
        <img 
          style={{width: '200px', height: '200px' }} 
          src='https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' 
          alt="nature" />
      </ul>
    </>
  );
}

export default AppJSX;