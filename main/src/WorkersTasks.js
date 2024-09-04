import Sidebar from "./Sidebar"
import AdminHeader from "./adminHeader";
import { Link } from "react-router-dom";
import {Container,Row,Col,Input} from 'reactstrap'
import axios from "axios";
import React,{useState,useEffect} from "react";
import WorkerHeader from "./workerHeader";

function WorkersTasks(){
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
    
      
      const handleWorkDoneChange = (event, index) => {
        const { value } = event.target;
        const updatedRequests = [...acceptedRequests];
        updatedRequests[index].workDone = value;
        setAcceptedRequests(updatedRequests);
    };
    const handleSubmit = async (requestId) => {
        const requestToUpdate = acceptedRequests.find(request => request._id === requestId);
        console.log(requestId)
        try {
            const response = await axios.put('http://localhost:5000/updateAcceptedRequest/'+requestId, {
                ...requestToUpdate,
                workDone: requestToUpdate.workDone
            });

            console.log('Updated:', response.data);
            alert('Submitted Successfully');
            const updatedRequests = acceptedRequests.filter(request => request._id !== requestId);
            setAcceptedRequests(updatedRequests);
            // Handle success (e.g., show a success message)
        } catch (error) {
            console.error('Error updating request:', error.response);
            // Handle error
        }
    };
    const filteredRequests = acceptedRequests.filter((request) =>
        request.mid.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return(
        <>
            <AdminHeader OpenSidebar={OpenSidebar}/>
            {/* <WorkerHeader OpenSidebar={OpenSidebar}/> */}
            {/* <Header/> */}
            <WorkerHeader openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <div>
            <h2>Assigned Requests</h2>
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
                        <th>Issue Type</th>
                        <th>Description</th>
                        <th>Work Done?</th>
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
                            <td>{request.itype}</td>
                            <td>{request.desc}</td>
                            <td>
                                    <Input
                                        type="select"
                                        value={request.workDone || ''}
                                        onChange={(e) => handleWorkDoneChange(e, index)}
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </Input>
                                </td>
                                <td><button className="btn btn-primary" onClick={() => handleSubmit(request._id)}>Submit</button></td>
                            {/* <td><Link to={`/maintenanceinfo/${request._id}`}><button className="btn btn-warning">Update</button></Link></td> */}
                        </tr>
                    )})}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default WorkersTasks;