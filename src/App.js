import React, { Component } from 'react';
import Draggable from 'react-draggable';
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import ReactFC from 'react-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import { ResizableBox } from 'react-resizable'
import Resizable from 're-resizable'
import './App.css'

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

class App extends Component {
  state = {
    width: 200,
    height: 200,
    width1: 200,
    height1: 200,
    width2: 200,
    height2: 200,
    width3: 200,
    height3: 200
  }
  render() {
    const myDataSource = {
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
      },
      "data": [
        {
          "label": "Venezuela",
          "value": "290"
        },
        {
          "label": "Saudi",
          "value": "260"
        },
        {
          "label": "Canada",
          "value": "180"
        },
        {
          "label": "Iran",
          "value": "140"
        },
        {
          "label": "Russia",
          "value": "115"
        },
        {
          "label": "UAE",
          "value": "100"
        },
        {
          "label": "US",
          "value": "30"
        },
        {
          "label": "China",
          "value": "30"
        }
      ]
    };

    const chartConfigs = {
      type: 'column2d',
      width: this.state.width,
      height: this.state.height,
      dataFormat: 'json',
      dataSource: myDataSource,
    };
    const chartConfigs1 = {
      type: 'line',
      width: this.state.width1,
      height: this.state.height1,
      dataFormat: 'json',
      dataSource: myDataSource,
    };

    const chartConfigs2 = {
      type: 'area2d',
      width: this.state.width2,
      height: this.state.height2,
      dataFormat: 'json',
      dataSource: myDataSource,
    };

    const chartConfigs3 = {
      type: 'pie2d',
      width: this.state.width3,
      height: this.state.height3,
      dataFormat: 'json',
      dataSource: myDataSource,
    };
    return (
      <div className="App">


        <div class="sidenav">
          <Draggable bounds={{ right: 10 }}>
            <Resizable
              size={{ width: this.state.width, height: this.state.height }}
              onResizeStop={(e, direction, ref, d) => {
                this.setState((prevState) => {
                  return {
                    width: prevState.width + d.width,
                    height: prevState.height + d.height
                  }
                })
              }}
            >
              <div>
                <ReactFC {...chartConfigs} />
              </div>
            </Resizable>
          </Draggable>

          <Draggable bounds={{ right: 10 }}>
            <Resizable
              size={{ width: this.state.width1, height: this.state.height1 }}
              onResizeStop={(e, direction, ref, d) => {
                this.setState((prevState) => {
                  return {
                    width1: prevState.width1 + d.width,
                    height1: prevState.height1 + d.height
                  }
                })
              }}
            >
              <div>
                <ReactFC {...chartConfigs1} />
              </div>
            </Resizable>
          </Draggable>


          <Draggable bounds={{ right: 10 }}>
            <Resizable
              size={{ width: this.state.width2, height: this.state.height2 }}
              onResizeStop={(e, direction, ref, d) => {
                this.setState((prevState) => {
                  return {
                    width2: prevState.width2 + d.width,
                    height2: prevState.height2 + d.height
                  }
                })
              }}
            >
              <div>
                <ReactFC {...chartConfigs2} />
              </div>
            </Resizable>
          </Draggable>


          <Draggable bounds={{ right: 5 }}>
            <Resizable
              size={{ width: this.state.width3, height: this.state.height3 }}
              onResizeStop={(e, direction, ref, d) => {
                this.setState((prevState) => {
                  return {
                    width3: prevState.width3 + d.width,
                    height3: prevState.height3 + d.height
                  }
                })
              }}
            >
              <div>
                <ReactFC {...chartConfigs3} />
              </div>
            </Resizable>
          </Draggable>



        </div>




      </div>
    );
  }
}

export default App;
