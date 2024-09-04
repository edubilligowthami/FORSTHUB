import Sidebar from "./Sidebar"
import AdminHeader from "./adminHeader";
import { Link } from "react-router-dom";
import {Container,Row,Col,Input} from 'reactstrap'
import axios from "axios";
import React,{useState,useEffect} from "react";

function AssignedTaks(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
    //   const t=[
    //     {
    //         id:1,
    //         clg:'AEC',
    //         desc:'qwertyuio',
    //         date:'17-03-2024'
    //     },
    //     {
    //         id:2,
    //         clg:'AEC',
    //         desc:'qwertyuio',
    //         date:'17-03-2024'
    //     }
    //   ]
    // let [reque,setReque]=useState([])
    // //let api='http://localhost:5000/getstudents';
    // useEffect(()=>{
    //     axios.get('http://localhost:5000/getmaintenancedata').then((response)=>{
    //         console.log(response.data.main)
    //         setReque(response.data.main);
    //     });
    // },[]);
    // const Deletereq=(id)=>{
    //     console.log(id);
    //     axios.delete('http://localhost:5000/deleterequestcomplete/'+id)
    //     .then(res=>{console.log(res)
    //     alert("data deleted successfully")
    //     window.location.reload()
    //     })
    //     .catch(err=>{console.log(err)})
    // }
    const [acceptedRequests, setAcceptedRequests] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchAcceptedRequests();
    }, []);

    const fetchAcceptedRequests = async () => {
        try {
            const response = await axios.get('http://localhost:5000/gettingacceptedrequests');
            setAcceptedRequests(response.data);
        } catch (error) {
            console.error('Error fetching accepted requests:', error);
            // Handle error
        }
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredRequests = acceptedRequests.filter((request) =>
        request.mid.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return(
        <>
            <AdminHeader OpenSidebar={OpenSidebar}/>
            {/* <Header/> */}
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <div>
            <h2>Accepted Requests</h2>
            <Input
              type="text"
              placeholder="Search by Material ID"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <table className='table'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Material Type</th>
                        <th>Material ID</th>
                        <th>College</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredRequests.map((request, index) => {
                        return(
                        <tr key={request._id}>
                            <td>{index + 1}</td>
                            <td>{request.name}</td>
                            <td>{request.material}</td>
                            <td>{request.mid}</td>
                            <td>{request.clg}</td>
                            <td>{request.desc}</td>
                            <td><Link to={`/maintenanceinfo/${request._id}`}><button className="btn btn-warning">Update</button></Link></td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default AssignedTaks;