import {React, useEffect,useReducer,useState} from "react";
import { Bar, Pie } from 'react-chartjs-2';
import {datachart, optionsexample, datapie, configpie, configstacked, datastacked,ChartpieCreateData,ChartpieCreateOption} from "../components/charts";
const DashBoardpage = () => {
  
const [databe, setData] = useState({
  labelschartbe:[""],
  labelspiebe: [""],
  labelsstackedbe: [""],
  datapiebe: [0],
  datastackedbe: [0],
  res: ""
});
/*const [datingpie,setDatingpie] = useState(datapie);
const [datasetspie,setDatasetsPie] = useState(configpie.data.datasets)
const [configgingpie,setConfiggingpie] = useState(configpie);
let datasetspiee = datapie.datasets;
let datapiee = datapie;
let configpiee = configpie;*/

useEffect(() => {
  // Using fetch to fetch the api from 
  // flask server it will be redirected to proxy
  //fetch("/").
  fetch("http://127.0.0.1:5000").then((res) =>
      res.json().then((data) => {
          // Setting a data from api
          /*datasetspiee = data.datapiebe;
          datapiee.datasets = datasetspiee;
          datapiee.labels = data.labelspiebe;
          configpiee.data = datapiee;*/
          setData({
              labelschartbe:data.labelschartbe,
              labelspiebe: data.labelspiebe,
              labelsstackedbe: data.labelsstackedbe,
              datapiebe: data.datapiebe,
              datastackedbe: data.datastackedbe,
              res: data.res,
              
          });
          /*setDatasetsPie({data:databe.datapiebe});
          setDatingpie({datasets:datasetspie,
            labels:data.labelspiebe});
          setConfiggingpie({data:datingpie});
          datapie.datasets =datingpie;
          datapie.labels= databe.labelspiebe;
          configpie.data= datapie;*/
          
      })
  );
  
}, []);
console.log(databe.res,databe.datapiebe,databe.datastackedbe,databe.labelsstackedbe);

const datapiee = ChartpieCreateData(databe.labelspiebe,databe.datapiebe);
const configpiee = ChartpieCreateOption(databe.datapiebe)



/*<h2>{datingpie.labels}</h2>
<Pie options={configgingpie} data={datingpie} />*/

    return (<>
        
        <div className="Title">
            <h1 id="left">Дашборд</h1>
            <h1 id="right">Модель здоровья клиента</h1>
        </div>
        <div className="Dashboard">
        <div className="Prognoz">
          <p>Прогноз на текущий период</p>
          <Bar options={configstacked} data={datastacked} />
        </div>
        <div className="Statistics">
          <p>Статистика за прошедший период</p>
          <Bar options={optionsexample} data={datachart} />
        </div>
        </div>
        <div className="Dashboard">
        <div className="Claster"> 
            <Pie options={configpie} data={datapie} />
            <Pie options={configpiee} data={datapiee} />
            
        </div>
        </div>
        <div>
          <h2>s={databe.res}</h2>
          
        </div>
        
        </>
    )
}

export {DashBoardpage}

/**/