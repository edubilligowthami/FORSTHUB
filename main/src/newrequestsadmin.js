import Sidebar from "./Sidebar"
import AdminHeader from "./adminHeader";
import {Container,Row,Col} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import {Table } from 'react-bootstrap';  
import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

function NewRequests(){
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
    const [acceptedRequestId, setAcceptedRequestId] = useState(null);
    const handleClick = (id) => {
        // setIsClicked(!isClicked);
        // acceptRequest(rid);
        console.log("Clicked", id);
        setAcceptedRequestId(id);
        acceptRequest(id);
    };
    const acceptRequest=(id)=>{
        // e.preventDefault();
        // console.log(formdata)
        axios.put('http://localhost:5000/acceptrequest/'+id)
        .then((res)=>{
            console.log(res);
            alert("Request accepted successfully");
            setRequest(request.filter(req => req._id !== id));
            setAcceptedRequestId(null);
        })
        .catch((err) => {
            console.error('Error accepting request:', err);
            // Handle error state or alert the user
        });
    };
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
    const Deletereq=(id)=>{
        console.log(id);
        axios.delete('http://localhost:5000/deleterequest/'+id)
        .then(res=>{console.log(res)
        alert("request deleted successfully")
        window.location.reload()
        fetchRequests();
        })
        .catch(err=>{console.log(err)})
    }

    // const Acceptreq=(id)=>{
    //     console.log(id);
    //     axios.put('http://localhost:5000/acceptrequest/'+id)
    //     .then(res=>{console.log(res)
    //     alert("request deleted successfully")
    //     window.location.reload()
    //     })
    //     .catch(err=>{console.log(err)})
    // }
    var now = new Date();
    var isoString = now.toISOString();
    return(
        <>
            <AdminHeader OpenSidebar={OpenSidebar}/>
            {/* <Header/> */}
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <Container>
                <Row>
                    <Col>
                        <table className='table'   >
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Ticket Raised Date</th>
                                <th>Material Type</th>
                                <th>College</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                            {
                                request && request.map((ele,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.date}</td>
                                            <td>{ele.material}</td>
                                            <td>{ele.clg}</td>
                                            <td>{ele.desc}</td>
                                            <td><button className='btn btn-success' style={{backgroundColor:acceptedRequestId===ele._id ?'green':'red'}} onClick={()=>handleClick(ele._id)} disabled={acceptedRequestId!==null && acceptedRequestId!==ele._id}>{acceptedRequestId===ele._id?'Accepted':'Accept'}</button></td>
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
export default NewRequests