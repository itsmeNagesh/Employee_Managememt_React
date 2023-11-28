
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/find/emp');
        setEmployees(response.data); // Assuming the API returns an array of employee data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array means this effect runs once after the initial render

  
    return (
        <div className='container'>
             <h2 className="text-center">Employee List</h2>
             <div className="row">
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                        <th> EmpId</th>
                        <th>  First Name</th>
                        <th>  LastName</th>
                        <th>  Email Id</th>
                

                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map((employee) => (
                        
                            <tr key={employee.id}>
                                   <td>{employee.id}</td>
                                 <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emaiId}</td>

                            </tr>
                              )
                        )
                    
                           
                     }
                    </tbody>
                </table>
             </div>
        </div>
     
    );
  };




export default EmployeeList;
