const Legend = () => {
  return (
    <>
      <table
        style={{
          background: "transparent",

          color: "white",
          width: "25%",
          border: "1px solid white",
          margin: "5px",
        }}
      >
        <tr style={{ borderBottom: "1px solid white", textAlign: "left" }}>
          <th>Mohawk</th>
          <th>Cree</th>
        </tr>
        <tr>
          <td>e:=e</td>
          <td>â=aa</td>
        </tr>
        <tr>
          <td>e'=e</td>
          <td>ê=ee</td>
        </tr>
        <tr>
          <td>a'=a</td>
          <td>î=ii</td>
        </tr>
        <tr>
          <td>o'=o</td>
          <td>ô=oo</td>
        </tr>
        <tr>
          <td>i'=i</td>
        </tr>
        <tr>
          <td>en.'=en'</td>
        </tr>
      </table>
    </>
  );
};

export default Legend;
