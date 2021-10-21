import { 
  MascotteIcon,
  FeedbackForm
} from './components';


function App() {
  return (
    <div className="App">
        <MascotteIcon looking="up" width="120" height="120" />
        <MascotteIcon width="80" height="80" type="finger" looking="front" color="#46EBB0" direction="down"/>
        <FeedbackForm />

    </div>
  );
}

export default App;
