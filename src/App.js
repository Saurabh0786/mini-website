
import './App.css';
import {Typography,TextField,makeStyles,Slider} from '@material-ui/core';
const value={
  Char_Limit:0,
}
function App() {
  return (
    <div className="App">
      <Typography>Website builder</Typography>
      <TextField id='charLimit' variant="outlined"
    Char_Limit="number"
      />
     
      <Slider defaultValue={50} aria-label="small" valueLabelDisplay="auto" />
    </div>
  );
}

export default App;
