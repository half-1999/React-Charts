import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartsJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js'
import { useEffect , useState } from "react";
ChartsJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
)

const options = {
    indexAxis:'x',
    elements:{
        bar:{
            borderWidth:2
        },
    },
    responsive:true,
    plugins:{
        legend:{
            position:'left'
        },
        title:{
            display:true,
            text:'Chart.js Vertical Example'
        }
    }
}
const labels = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday']


const VerticalBarChart = () => {
    const [data , setData] = useState({
        labels,
        datasets:[
            {
                label:'Dataset 1',
                data:[1,2,3,4,5,6,7],
                borderColor:'rgb(255,0,0)',
                backgroundColor:'rgb(255,170,1)'
            },
            {
                label:'Dataset 2',
                data:[1,2,3,4,5,6,7],
                borderColor:'rgb(65,125,252)',
                backgroundColor:'rgb(64,223,205)'
            },
        ]
    })

    useEffect(()=>{
        const fetchData= async()=>{
        const uri = "https://jsonplaceholder.typicode.com/comments"
        const dataSet1 = []
        const dataSet2 = []
        const labelSet = []
        await fetch(uri,{
            method:'GET'
        }).then(data =>{
            const res = data.json();
            return res
        }).then((res)=>{
            console.log(res)
            for(const val of res){
                dataSet1.push(val.id)
                dataSet2.push(val.postId)
                labelSet.push(val.name)
            }
            setData({
                labels:labelSet,
                datasets:[
                    {
                        label:'Dataset Id',
                        data:dataSet1,
                        borderColor:'rgb(255,0,0)',
                        backgroundColor:'rgb(255,170,1)'
                    },
                    {
                        label:'Dataset Id2',
                        data:dataSet2,
                        borderColor:'rgb(65,125,252)',
                        backgroundColor:'rgb(64,223,205)'
                    },
                ]
            })
            console.log("ArrData", dataSet1 , dataSet2)
        }).catch(err =>{
            console.log("Error",err)
        })
        }
        fetchData();
    },[])

  return (
    <>
    <h1>Vertical  BarChart Example</h1>

    <Bar style={{width:'90%' , height:'50%' , margin:'50px'}} data={data} options={options}/>
    </>
  )
}

export default VerticalBarChart;