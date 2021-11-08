import RouterConfig from "./routes/RouterConfig";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

function App() {
  return (
    <div >
      <RouterConfig/>
      
    </div>
  );
}

export default App;
