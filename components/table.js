import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import tableStyles from "./table.module.css";

import axios from "axios";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { data } from "autoprefixer";

import Swal from "sweetalert2";
import { test } from "gray-matter";

const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);

const Table = () => {
  const [bioEmployee, setBioEmployee] = useState([]);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    employeeName: "",
  });

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
  };

  const handleEditClick = (event, data) => {
    console.log("🚀 ~ file: table.js ~ line 94 ~ handleEditClick ~ data", data);
    event.preventDefault();
    setEditEmployeeId(data._id);

    const formValues = {
      employeeName: data.employeeName,
    };

    setEditFormData(formValues);
  };

  const handleEditFormChange = async (e, data, employeeId) => {
    console.log(
      "🚀 ~ file: table.js ~ line 95 ~ handleEditFormChange ~ employeeId",
      employeeId
    );
    try {
      e.preventDefault();

      const editedEmployee = {
        employeeName: data.employeeName,
      };
      console.log(
        "🚀 ~ file: table.js ~ line 105 ~ handleEditFormChange ~ editedEmployee",
        editedEmployee
      );

      // const newEmployee = [...contacts];

      // const index = contacts.findIndex(
      //   (contact) => contact.id === editContactId
      // );

      // setContacts(newContacts);
      // setEditContactId(null);

      // await axios
      //   .put(
      //     `https://ms-yusufprawiro-betest.cyclic.app/api/employee/update/${employeeId}`,
      //     {},
      //     {
      //       headers: {
      //         "Content-Type": "application/json",
      //         Authorization: localStorage.getItem("token"),
      //       },
      //     }
      //   )
      //   .then((result) => {
      //     const response = result.data;
      //     console.log(
      //       "🚀 ~ file: table.js ~ line 111 ~ .then ~ response",
      //       response
      //     );
      //     if (response.statusCode === 200) {
      //       Swal.fire({
      //         // position: "middle",
      //         icon: "success",
      //         title: "Data Sukses Diperbarui",
      //         text: response.message,
      //       }).then((value) => {
      //         location.reload();
      //       });
      //     } else {
      //       Swal.fire({
      //         icon: "error",
      //         title: "Gagal Tersimpan",
      //       });
      //     }
      //   });
      setEditFormData(editedEmployee);
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
                    data={data}
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
