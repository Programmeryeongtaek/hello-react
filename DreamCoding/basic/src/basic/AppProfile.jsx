import './style/AppProfile.css';
import Avartar from './components/Avartar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = e => {
    console.log(e);
    alert('버튼이 클릭됨!');
  };

  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avartar 
        image="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        isNew={true}
      />
      <Profile 
        image="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        name='James Kim'
        title='프론트엔드 개발자'
        isNew={true}
      />
      <Profile 
        image="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        name='Anna Young'
        title='백엔드 개발자'
      />
      <Profile 
        image="https://plus.unsplash.com/premium_photo-1661266805004-e18db43a390d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        name='Bob Yu'
        title='프론트엔드 개발자'
      />
    </>
  );
}

export default AppProfile;