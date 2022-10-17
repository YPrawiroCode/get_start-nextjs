import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import tableStyles from "./table.module.css";

import axios from "axios";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";

const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const Table = () => {
  const [bioEmployee, setBioEmployee] = useState([]);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  useEffect(() => {
    getBioEmployee();
  }, []);

  const getBioEmployee = () => {
    const url =
      "https://ms-yusufprawiro-betest.cyclic.app/api/employee/readall";
    axios.get(`${url}`).then((result) => {
      const employee = result.data;
      setBioEmployee(employee);
    });
  };

  const handleEditClick = (event, data) => {
    event.preventDefault();
    setEditEmployeeId(data._id);
  };

  return (
    <div className="app-container">
      <form>
        <table className={tableStyles.table}>
          <thead className={tableStyles.th}>
            <tr>
              <th className={tableStyles.th}>No</th>
              <th className={tableStyles.th}>Name</th>
              <th className={tableStyles.th}>Date Join</th>
              <th className={tableStyles.th}>Status</th>
              <th className={tableStyles.th}>Division</th>
              <th className={tableStyles.th}>Gender</th>
              <th className={tableStyles.th}>Address</th>
              <th className={tableStyles.th}>Actions</th>
            </tr>
          </thead>
          <tbody className={tableStyles.td}>
            {bioEmployee.data?.map((data, index) => (
              <Fragment key={index}>
                {editEmployeeId === data._id ? (
                  <EditableRow index={index} />
                ) : (
                  <ReadOnlyRow
                    key={index}
                    index={index}
                    data={data}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Table;
