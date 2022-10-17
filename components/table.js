import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import tableStyles from "./table.module.css";

import axios from "axios";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { data } from "autoprefixer";

import Swal from "sweetalert2";

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

  async function editEmployee(credentials) {
    return fetch(
      `https://ms-yusufprawiro-betest.cyclic.app/api/employee/update/${data._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(credentials),
      }
    ).then((data) => data.json());
  }

  const handleCancelClick = () => {
    setEditEmployeeId(null);
  };

  const handleDeleteClick = async (employeeId) => {
    try {
      console.log(
        "🚀 ~ file: table.js ~ line 52 ~ handleDeleteClick ~ employeeId",
        employeeId
      );

      await axios
        .delete(
          `https://ms-yusufprawiro-betest.cyclic.app/api/employee/del/${employeeId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((result) => {
          const response = result.data;
          console.log(
            "🚀 ~ file: table.js ~ line 68 ~ ).then ~ response",
            response
          );
          if (response.statusCode === 200) {
            Swal.fire({
              // position: "middle",
              icon: "success",
              title: "Data Sukses Terhapus",
              text: response.message,
            }).then((value) => {
              location.reload();
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Gagal Tersimpan",
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
    // const newEmployee = [...bioEmployee.data]

    // const index = bioEmployee.data.findIndex((employee)=> employee._id === employeeId)
  };

  const handleEditClick = (event, data) => {
    event.preventDefault();
    setEditEmployeeId(data._id);
  };

  const handleEditFormChange = async (e) => {
    try {
      e.preventDefault();
      const response = await editEmployee({
        employeeName,
        date_join,
        status,
        division,
        gender,
        address,
      });
      console.log(
        "🚀 ~ file: dashboard.js ~ line 46 ~ handleSubmit ~ response",
        response
      );
      if (response.statusCode === 201) {
        Swal.fire({
          position: "middle",
          icon: "success",
          title: "Data Tersimpan",
          text: response.message,
        }).then((value) => {
          location.reload();
        });
      } else if (response.statusCode === 400) {
        Swal.fire({
          icon: "error",
          title: "Gagal Tersimpan",
          text: response.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
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
                  <EditableRow
                    index={index}
                    handleCancelClick={handleCancelClick}
                    handleEditFormChange={handleEditFormChange}
                  />
                ) : (
                  <ReadOnlyRow
                    key={index}
                    index={index}
                    data={data}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
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
