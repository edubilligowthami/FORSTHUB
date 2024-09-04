import React, {useState} from 'react';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsBoxArrowDownRight, BsBoxArrowRight, BsDatabaseCheck, BsHammer, BsPlusCircle, BsSnow,BsCardChecklist}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom'
 import './styles/admin.css';
 import { ReactDOM } from 'react';
 import {Container,Row,Col} from "reactstrap";
 
//  import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
// import ToggleButton from '@mui/material/ToggleButton';
// import { ToggleButtonGroup } from 'react-bootstrap';


 

function Sidebar({openSidebarToggle, OpenSidebar}) {
    // const [view,setView]=React.useState('list');
    // const handleChange=(event,nextView)=>{
    //     setView(nextView);
    // }
    
    
    // const ToggleSidebar=()=>{
    //     const [isOpen, setIsopen]=useState(false);
    //     const ToggleSidebar=()=>{
    //     const isOpen === true ? setIsopen(false):setIsopen(true);
    // }

    
  return (
    
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand' style={{color:'white'}}>
                <BsSnow style={{color:'white'}} className='icon_header'/> FROS<span style={{color:'orange'}}>T-HUB</span>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <Container>
            <Row>
                <Col lg='2' md='2' sm='12'>
                    <a href="" style={{textDecoration:'none'}}>
                        <BsGrid1X2Fill className='icon' style={{color:'white'}}/> <Link to='/adminhome' style={{color:'white', textDecoration:'none'}}>Dashboard</Link>
                    </a>
                </Col>
                <Col lg='2' md='2' sm='12'>
                <a href="" style={{textDecoration:'none'}}>
                    <BsFillArchiveFill className='icon' style={{color:'white'}}/> <Link to='/newrequests' style={{color:'white', textDecoration:'none'}}>New Requests</Link>
                </a>
                </Col>
                {/* <Col lg='2' md='2' sm='12'>
                <a href="" style={{textDecoration:'none'}}>
                    <BsPlusCircle className='icon' style={{color:'white'}}/> <Link to='/newdatainsertion' style={{color:'white', textDecoration:'none'}}>New Data Insertion</Link>
                </a>
                </Col> */}
                <Col lg='2' md='2' sm='12'>
                <a href="" style={{textDecoration:'none'}}>
                    <BsHammer className='icon' style={{color:'white'}}/> <Link to='/assignedtasks' style={{color:'white', textDecoration:'none'}}>Accepted Requests</Link>
                </a>
                </Col>
                <Col lg='2' md='2' sm='12'>
                <a href="" style={{textDecoration:'none'}}>
                    <BsCardChecklist className='icon' style={{color:'white'}}/> <Link to='/adminworker' style={{color:'white', textDecoration:'none'}}>Worker Remark</Link>
                </a>
                </Col>
                <Col lg='2' md='2' sm='12'>
                <a href="" style={{textDecoration:'none'}}>
                    <BsDatabaseCheck className='icon' style={{color:'white'}}/> <Link to='/inventory' style={{color:'white', textDecoration:'none'}}> Inventory</Link>
                </a>
                </Col>
                <Col lg='2' md='2' sm='12'>
                <a href="" style={{textDecoration:'none'}}>
                    <BsBoxArrowRight className='icon' style={{color:'white'}}/> <Link to='/adminlogout' style={{color:'white', textDecoration:'none'}}> Logout</Link>
                </a>
                </Col>
            </Row>
        </Container><br/>
    </aside>
  )
}

export default Sidebar