import { useState } from "react";

import { AiFillSave } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

import "react-datepicker/dist/react-datepicker.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import tableStyles from "./table.module.css";

async function editEmployee(credentials) {
  console.log(
    "🚀 ~ file: EditableRow.js ~ line 11 ~ editEmployee ~ credentials",
    credentials
  );

  // return fetch(
  //   `https://ms-yusufprawiro-betest.cyclic.app/api/employee/update/${}`,
  //   {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("token"),
  //     },
  //     body: JSON.stringify(credentials),
  //   }
  // ).then((data) => data.json());
}

const EditableRow = ({
  editFormData,
  data,
  index,
  handleEditFormChange,
  handleCancelClick,
}) => {
  const [date_join, setSelectedDate] = useState();

  const [employeeName, setEmployeeName] = useState();

  const [status, setStatus] = useState();
  const [division, setDivision] = useState();

  const [gender, setGender] = useState();
  const [address, setAddress] = useState();

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <input
          type="text"
          placeholder="Enter a name..."
          name="nameEmployee"
          value={data.employeeName}
          // onChange={handleEditFormChange}
          // onChange={(e) => setEmployeeName(e.target.value)}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Join Date"
            value={date_join}
            dateFormat="dd/MM/yyyy"
            // onChange={(newValue) => {
            //   const d = new Date(newValue).toLocaleDateString();
            //   console.log(d);
            //   setSelectedDate(d);
            // }}
            onChange={handleEditFormChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </td>
      <td>
        <input
          type="radio"
          className="form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="status"
          name="status"
          value="Employee"
          // onChange={(e) => setStatus(e.target.value)}
          onChange={handleEditFormChange}
          checked={true}
        />
        Employee
        <input
          type="radio"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="status"
          name="status"
          value="Intership"
          // onChange={(e) => setStatus(e.target.value)}
          onChange={handleEditFormChange}
          checked={false}
        />
        Intership
      </td>
      <td>
        <input
          type="text"
          id="division"
          name="division"
          placeholder="Division"
          className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={data.division}
          // onChange={(e) => setDivision(e.target.value)}
          // onChange={(e) => handleEditFormChange(e.target.value)}
        />
      </td>
      <td>
        <input
          type="radio"
          className="form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="gender"
          name="gender"
          value="Male"
          // onChange={(e) => setGender(e.target.value)}
          onChange={handleEditFormChange}
          checked={true}
        />
        <p className="pr-5">Male</p>
        <input
          type="radio"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="gender"
          name="gender"
          value="Female"
          // onChange={(e) => setGender(e.target.value)}
          onChange={handleEditFormChange}
        />
        Female
      </td>
      <td>
        <textarea
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="address"
          name="address"
          rows="2"
          placeholder="Address"
          value={data.address}
          // onChange={(e) => setAddress(e.target.value)}
          onChange={handleEditFormChange}
        ></textarea>
      </td>
      <td className={tableStyles.td}>
        <div className="flex">
          <AiFillSave />
          <button
            className="px-2"
            // type="button"
            type="submit"
            // onClick={(e) => handleEditFormChange(e, data, data._id)}
            onClick={handleEditFormChange}
          >
            Save
          </button>

          <GiCancel />
          <button className="px-2" type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EditableRow;
