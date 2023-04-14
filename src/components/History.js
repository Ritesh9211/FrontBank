import axios from "axios";
import react, { useEffect, useState } from "react";

const History = () => {
  const [transactions, setTransactions] = useState([]);

  const getHistory = async () => {
    try {
      const response = await axios.get("https://bankbackend-oqlf.onrender.com/api/gethistory");

      console.log(response);
      setTransactions(response.data);
    } catch (err) {
      console.log(err.response.data.error);
      // console.log(err.message);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="History">
      <div className="container">
        <h1>All Transactions</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Sender</th>
              <th>Receiver</th>
              <th>Transfer Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction,idx) => (
              <tr key={transaction._id}>
                <td>{idx+1}</td>
                <td>{transaction.sender}</td>
                <td>{transaction.receiver}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
