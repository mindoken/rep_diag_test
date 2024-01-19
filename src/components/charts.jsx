
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import {faker} from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);




export var optionsexample = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//const labels = data.labelschart;
const labelspie = ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
//const labelspie = data.labelspie;

export const datachart = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export var datapie = {
  labels: labelspie,
  datasets: [
    {
      label: 'Dataset 3',
      data: [133.3,133.3,133.3,133.3,133.3],
      backgroundColor:'rgba(53, 162, 235, 0.5)',
    }
  ]
}

export const datastacked = {
  labels: ['1'],
  datasets: [
    
    {
      axis: 'y',
      label: 'Dataset 1',
      data: [133.6],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      stack: 'Stack 0',
    },
    {
      axis: 'y',
      label: 'Dataset 2',
      data: [120.5],
      backgroundColor: 'rgba(25, 100, 235, 0.5)',
      stack: 'Stack 0',
    },
    {
      axis: 'y',
      label: 'Dataset 3',
      data: [12.0],
      backgroundColor: 'rgba(100, 25, 235, 0.5)',
      stack: 'Stack 0',
    },
  ]
}

export var configpie = {
  type: 'pie',
  data: datapie,
  options: {
    responsive:true,
    plugins: {
      legend:{
        position: 'top',
      },
      title: {
        display: true,
        text: 'Кластеры'
      }
    }

  }
}

export const configstacked = {
  type: 'bar',
  data: datastacked,
  options: {
    
    elements: {
      bar: {
        indexAxis: 'y',
        borderWidth: 2,
      }
    },
    
    plugins: {
      legend:{
        position:'right',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      x: {
        stacked:true,
      },
      y: {
        stacked:true,
      },
    },
  },
}
/*
function Chart(){
  const [data, setData] = useState({

    labelschart: [''],
    labelspie: [''],
    labelsstacked: [''],
    datachart: '',
    datapie:[0],
    datastacked:[0]
  }); 
  function getData() {
    axios({
      method: "GET",
      url:"/",
    }).then((response) => {
      const res =response.data
      setData(({
        labelschart: response.labelschartbe,
              labelspie: response.labelspiebe,
              labelsstacked: response.labelsstackedbe,
              datachart: response.datachartbe,
              datapie:response.datapiebe,
              datastacked:response.datastackedbe}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

    useEffect(() => {
      let ignore = false;
      
      if (!ignore)  getData()
      return () => { ignore = true; }
      },[]);
}*/

export function ChartpieCreateData(labelsofpie,datasetofpie){
  const datapie = {
    labels: labelsofpie,
    datasets: [
      {
        label: 'Dataset 1',
        data: datasetofpie,
        backgroundColor:'rgba(53, 162, 235, 0.5)',
      }
    ]
  }
  return datapie
}
export function ChartpieCreateOption(datasetofpie){
  const configpie = {
    type: 'pie',
    data: datasetofpie,
    options: {
      responsive:true,
      plugins: {
        legend:{
          position: 'top',
        },
        title: {
          display: true,
          text: 'Кластеры'
        }
      }
  
    }
  }
  return configpie
}
