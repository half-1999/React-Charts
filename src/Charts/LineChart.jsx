import React , {useEffect , useState} from 'react'
import {Chart as ChartsJS,CategoryScale,Filler,LinearScale,PointElement,BarElement,Title,Tooltip,Legend,ArcElement,LineElement} from 'chart.js'
import {Line} from 'react-chartjs-2'
ChartsJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    LineElement,
    PointElement,
    Filler
    )

const LineChart = () => {
    const [data,setData] = useState({
         labels : ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'],
         label:"First DataSet",
         datasets:[{
            data:[14,20,32,49,58,60,78],
            backgroundColor:"yellow",
            borderColor:'red',
            tension:0.4,
            fill:true,
            pointStyle:'circle',
            pointBorderColor:'blue',
            pointBackgroundColor:'#fff',
            showLine:true
         }]
    })

    useEffect(()=>{
        const arr = []
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => 
        {console.log(json)
        json.map((item , index)=>{
            arr.push(item.id)
            arr.reverse()
        })
        setData({
          labels : ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday','Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'],
          datasets:[{
             data:arr,
             backgroundColor:"yellow",
             borderColor:'red',
             tension:0.4,
             fill:true,
             pointStyle:'circle',
             pointBorderColor:'blue',
             pointBackgroundColor:'#fff',
             showLine:true
          }]
     })
        })
    },[])
  return (
    <>
    <h1>LineChart Example</h1>

    <Line style={{width:'800px' , height:'800px'}} data={data}/>
    </>
  )
}

export default LineChart