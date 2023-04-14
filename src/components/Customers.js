import  { useState, useEffect } from "react";
import axios from "axios";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try{
        const res = await axios.get("/getusers");
        console.log("res: ", res);
        // console.log("res: ", rses.status);
        setCustomers(res.data);
      }catch(err){
        console.log(err.response);
        window.alert(err.response.data.error);
      }
      
    };

    getData();
  }, []);

  return (
    <div className="Customers">
      <div className="container">
        <h1>List of all customers</h1>
        <table>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Account Balance</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer,idx) => (
              <tr key={customer._id}>
                <td>{idx+1}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
