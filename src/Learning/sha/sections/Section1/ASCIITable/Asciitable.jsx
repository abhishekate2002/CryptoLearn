import "./Asciitable.css";

function Asciitable() {
  //complex func
  const numRows = 128; // Total number of rows
  const rowsPerTable = 16; // Number of rows per table

  const tables = []; // empty arry to stare row jsx
  for (let i = 0; i < numRows; i += rowsPerTable) {
    // iterate through total number of rows and creating rowPerTable for every 20 rows.
    //this is done to split table and spread them horizontally on screen
    console.log(i);
    const tableRows = [];
    //loop used to calculate binary representation of string value
    for (let j = i; j < i + rowsPerTable && j < numRows; j++) {
      //goes to each individual iteration of string
      const asciiChar = String.fromCharCode(j); //holds all the ascii values in it
      const binaryValue = j.toString(2).padStart(8, "0"); //holds binary values for each asciiChar key
      tableRows.push(
        //genrate table elements using react components
        <tr key={j}>
          <td>{j}</td>
          <td>{asciiChar}</td>
          <td>{binaryValue}</td>
        </tr>
      );
    }

    tables.push(
      <div className="table-container" key={i}>
        <h2>
          ASCII Table (Rows {i + 1} - {Math.min(i + rowsPerTable, numRows)})
        </h2>
        <table>
          <thead>
            <tr>
              <th>Decimal</th>
              <th>ASCII</th>
              <th>Binary</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  }

  return <div>{tables}</div>;
}

export default Asciitable;
