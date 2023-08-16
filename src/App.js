import './App.css';
import HorizontalBarChart from './Charts/HorizontalBarChart';
import VerticalBarChart from './Charts/VerticalBarChart';
import PieChart from './Charts/PieChart';
import Doughnut from './Charts/DoughnutChart';
import LineChart from './Charts/LineChart';

function App() {
  return (
    <div className="App">
      <HorizontalBarChart/>
      <VerticalBarChart/>
      <PieChart/>
      <Doughnut/>
      <LineChart/>
    </div>
  );
}

export default App;
