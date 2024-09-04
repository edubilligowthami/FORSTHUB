import Sidebar from "./Sidebar"
import AdminHeader from "./adminHeader";
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {Table } from 'react-bootstrap';  
import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

function AdminWorker(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");

      const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
      }
    useEffect(() => {
        fetchRequests();
    }, []);
    let [request,setRequest]=useState([])
    //let api='http://localhost:5000/getstudents';
    const fetchRequests=()=>{
        axios.get('http://localhost:5000/getrequests').then((response)=>{
            console.log(response.data.reqs)
            setRequest(response.data.reqs);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredRequests = request.filter((ele) => {
        return (
            ele.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ele.material.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ele.mid.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ele.clg.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ele.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ele.workDone.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    var now = new Date();
    var isoString = now.toISOString();
    return(
        <>
            <AdminHeader OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Container>
                <Row>
                    <Col>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <table className='table'   >
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Ticket Raised Date</th>
                                <th>Material Type</th>
                                <th>Material ID</th>
                                <th>College</th>
                                <th>Description</th>
                                <th>Worker Remark</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>
                            {
                                filteredRequests.map((ele,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.date}</td>
                                            <td>{ele.material}</td>
                                            <td>{ele.mid}</td>
                                            <td>{ele.clg}</td>
                                            <td>{ele.desc}</td>
                                            <td>{ele.workDone}</td>
                                            {/* <td><button className='btn btn-success' style={{backgroundColor:acceptedRequestId===ele._id ?'green':'red'}} onClick={()=>handleClick(ele._id)} disabled={acceptedRequestId!==null && acceptedRequestId!==ele._id}>{acceptedRequestId===ele._id?'Accepted':'Accept'}</button></td> */}
                                            {/* <Link to={`/maintenanceinfo/${ele._id}`}><button className="btn btn-warning">Update</button></Link></td> */}
                                            
                                            {/* <td><button className='btn btn-success' onClick={()=>Acceptreq(ele._id)}>Deny</button></td> */}
                                            {/* <td><button className='btn btn-danger' onClick={()=>Deletereq(ele._id)}>Delete</button></td> */}
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AdminWorker