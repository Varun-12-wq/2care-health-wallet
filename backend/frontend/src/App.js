import { useEffect, useState } from "react";

function App() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5050/records")
      .then(res => res.json())
      .then(data => {
        console.log("fetched data:", data);
        setRecords(data);
        setLoading(false);   // ⭐ THIS LINE IS CRITICAL
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🩺 2Care Health Wallet</h1>
      <p>Simple Digital Health Records Viewer</p>

      {loading && <p>Loading records...</p>}

      {!loading && records.length === 0 && (
        <p>No health records found.</p>
      )}

      {!loading && records.length > 0 && (
        <ul>
          {records.map(record => (
            <li key={record.id}>
              <b>{record.name}</b> — Age: {record.age}, Condition: {record.condition}, Balance: {record.balance}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;