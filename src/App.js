import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './components/DashBoard';



function App() {
  return (
    <div className="App">
      <div className='intro-heading'>
        <div className='left-side'>
        <img src='https://logowik.com/content/uploads/images/t_zerodha6662.jpg' height={80} width={100} />
        </div>
        <div className='right-side'>
        <button className='Button'>Home</button>
        <button id='signupbutton' className='Button'>SignUp</button>
        </div>
       </div>
       <div className='dashboard'>
       <DashBoard/>
       </div>
       
      
    </div>
  );
}

export default App;
