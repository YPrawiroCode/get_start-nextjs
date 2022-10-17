import tableStyles from "./table.module.css";

const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const ReadOnlyRow = ({ data, index }) => {
  console.log("🚀 ~ file: ReadOnlyRow.js ~ line 8 ~ ReadOnlyRow ~ data", data);
  return (
    <tr>
      <td className={tableStyles.td}>{index + 1}</td>
      <td className={tableStyles.td}>{data.employeeName}</td>
      <td className={tableStyles.td}>
        {dayjs(data.dateJoin).format("DD-MM-YYYY")}
      </td>
      <td className={tableStyles.td}>{data.status}</td>
      <td className={tableStyles.td}>{data.division}</td>
      <td className={tableStyles.td}>{data.gender}</td>
      <td className={tableStyles.td}>{data.address}</td>
    </tr>
  );
};

export default ReadOnlyRow;
