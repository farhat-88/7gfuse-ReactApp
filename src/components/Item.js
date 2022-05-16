
import React, { useEffect, useState } from "react";
import $ from 'jquery';

function Item() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        fetch("./data.json").then(
            function(res){
            return res.json()
            }).then(function(data){
            // store Data in State Data Variable
            console.log(data);
            setUsers(data)
            }).catch(
            function(err){
                console.log(err, ' error')
            }
        )
  
    };

   useEffect(() => {
        // $("#example2").DataTable();
        setTimeout(()=>{
          $("#example2").DataTable();
        },10)
    }, [])

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">
                    <div className="card mt-4-new table-card">
                        <div className="card-header">
                            <div>
                                <h3 className="card-title">
                                    Route Table
                                </h3>
                            </div>
                        </div>
                        
                        <div className="card-body pt-1">
                            <table id= "example2" className="table-sm table-hover table-advance table-condensed table-header-fixed no-footer w-100 dt-responsive pt-2">
                                <thead>
                                    <tr>
                                        <th>Network</th>
                                        <th>Target</th>
                                        <th>IP Gateway</th>
                                        <th>Metric</th>
                                    </tr>
                                </thead>
                                <tbody>
                
                                {users &&
                                    users.map(user => (
                                    <tr>
                                        <td>{user.device}</td>
                                        <td>{user.dst}</td>
                                        <td>{user.gateway}</td>
                                        <td>{user.metric}</td>
                                    </tr>           ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
}
export default Item;  