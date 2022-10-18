import tableStyles from "./table.module.css";

import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri";

const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const ReadOnlyRow = ({ data, index, handleEditClick, handleDeleteClick }) => {
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
      <td className={tableStyles.td}>
        <div className="flex">
          <RiEdit2Fill />
          <button
            className="px-2"
            type="button"
            onClick={(event) => handleEditClick(event, data)}
          >
            Edit
          </button>
          {/* </div>
          <br />
          <div className="flex"> */}
          <RiDeleteBin2Fill />
          <button
            className="px-2"
            type="button"
            onClick={() => handleDeleteClick(data._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
