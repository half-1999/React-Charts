import React , {useEffect , useState} from 'react'
import {Chart as ChartsJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,ArcElement} from 'chart.js'
import {Pie} from 'react-chartjs-2'
ChartsJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
    )

const PieChart = () => {

    const [data , setData] = useState({
        datasets: [{
            data: [10, 20, 30,40],
            backgroundColor:['green','yellow','orange','red']
        }],
        labels: ['green','yellow','orange','red']
    })

    useEffect(()=>{
        const fetchData= async()=>{
        const uri = "https://jsonplaceholder.typicode.com/users"
        await fetch(uri,{
            method:'GET'
        }).then(data =>{
            const res = data.json();
            return res
        }).then((res)=>{
            console.log(res)
            const label = [];
            const data = [];

            for (var i of res){
                label.push(i.name);
                data.push(i.id);
            }

            setData(
                {
                    datasets: [{
                        data: data,
                        backgroundColor:['green','yellow','orange','red']
                    }],
                    labels: label
                }
            )

        }).catch(err =>{
            console.log("Error",err)
        })
        }
        fetchData();
    },[]);

  return (
    
    <>
    <h1>PieChart Example</h1>

    <div style={{width:'40%' , height:'40%' , margin:'auto' }} >
    <Pie data={data}/>
    </div>
    </>
  )
}

export default PieChart