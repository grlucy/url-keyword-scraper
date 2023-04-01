import "./style.css";

export default function ResultTable(props) {
  const { tableRows } = props;

  return (
    <>
      <table>
        <tbody>
          {Object.entries(tableRows).map(([key, value]) => (
            <tr key={key}>
              <td className="tableLabel">{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
