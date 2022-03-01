import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { PermIdentity, BarChart} from "@material-ui/icons";


const Admin = () => {

    const [userData, setUserData] = useState([]);
    const [appointmentData, setAppointmentData] = useState([]);
    
    const usercolumns = [
        { title: "ID", field: "_id" },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" }
    ];

    const appointmentColoums = [
        { field: "name", title: "name" },
        { field: "address", title: "Address" },
        { field: "service", title: "Donations" },
        { field: "date", title: "Date" },
        { field: "ngo", title: "Ngo Name" },
        
        // { field: "tookBy.email", title: "Email" }
    ];


    useEffect(() => {
        fetch("/allusers")
            .then(res => res.json())
            .then(resData => {
                setUserData(resData.list)
                // console.log(resData);
            });

        fetch("/alldonation")
            .then((res) => res.json())
            .then(result => {
                setAppointmentData(result.list);
                // console.log(result);
            });

    }, [])


    return (
      
        <div className="AdminContainer">
            <div className="AdminPanel">
                <div className="sidebar left">
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <h3 className="sidebarTitle">Dashboard</h3>
                            <ul className="sidebarList">
                                <li className="sidebarListItem" >
                                    <a class="sidebarListItem" href="#apmnt">
                                        <BarChart className="sidebarIcon" />
                                        Donations
                                    </a>
                                </li>
                                <li className="sidebarListItem" >
                                    <a class="sidebarListItem" href="#usr">
                                        <PermIdentity className="sidebarIcon" />
                                        Users
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="UserListContainer right">
                    {/* Appointments Table */}
                    <div className="sectioInside">
                        <section id="apmnt">
                            <div className="UserList">
                                <div>
                                    <MaterialTable
                                        title="Donations"
                                        data={appointmentData}
                                        columns={appointmentColoums}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Users Table */}
                    <div className="sectioInside">
                        <section id="usr">
                            <div className="UserList">
                                <div>
                                    <MaterialTable
                                        title="Users"
                                        data={userData}
                                        columns={usercolumns}
                                        options={{ search: false }}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Admin
