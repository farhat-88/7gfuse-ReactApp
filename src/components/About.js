import React, { useState} from 'react'
import $ from 'jquery';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"


// componentDidMount ()  {
//     $(document).ready(function () {
     
//         $('#example').DataTable();
     
//     });
// }

//class About extends Component {
export default function About(props) {




     // react Hook For State Handler
     const [data , setData]=useState(null)

     // Fetch Function   
     fetch("./data.json").then(
         function(res){
         return res.json()
         }).then(function(data){
         // store Data in State Data Variable
         console.log(data);
         setData(data)
         }).catch(
         function(err){
             console.log(err, ' error')
         }
     )
    
     //render(){
    //Datatable HTML
    return (
        <>
        {/* // <!-- Content Wrapper. Contains page content --> */}
        <div className="content-wrapper">
            {/* <!-- Main content --> */}
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
                        <table id= "example" className="table-sm table-hover table-advance table-condensed table-header-fixed no-footer w-100 dt-responsive">
                            <thead>
                                <tr>
                                    <th>Network</th>
                                    <th>Target</th>
                                    <th>IP Gateway</th>
                                    <th>Metric</th>
                                </tr>
                            </thead>
                        {
                            // use data State Variable For Get Data Use JavaScript Map Mathod
                        data? data.map(
                            function(data){
                                return (

                                    <tbody>
                                        <tr>
                                            <td>{data.device}</td>
                                            <td>{data.dst}</td>
                                            <td>{data.gateway}</td>
                                            <td>{data.metric}</td>
                                        </tr>
                                    </tbody>
                                
                                )
                            }
                            ):""
                        }
                         </table>  
                        </div>
                    </div>
                </div>
                {/* <!-- /.container-fluid --> */}
            </section>
            {/* <!-- /.content --> */}
        </div>
        {/* // <!-- /.content-wrapper --> */}
        </>
    );
   }
//  }
  //export default About;
  
