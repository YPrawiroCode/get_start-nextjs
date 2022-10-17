import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const EditableRow = ({ data, index }) => {
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
        ></input>
      </td>
      <td>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Join Date"
            value={date_join}
            dateFormat="dd/MM/yyyy"
            onChange={(newValue) => {
              const d = new Date(newValue).toLocaleDateString();
              console.log(d);
              setSelectedDate(d);
            }}
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
          onChange={(e) => setStatus(e.target.value)}
        />
        Employee
        <input
          type="radio"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="status"
          name="status"
          value="Intership"
          onChange={(e) => setStatus(e.target.value)}
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
          onChange={(e) => setDivision(e.target.value)}
        />
      </td>
      <td>
        <input
          type="radio"
          className="form-control block w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="gender"
          name="gender"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
        />
        <p className="pr-5">Male</p>
        <input
          type="radio"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="gender"
          name="gender"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
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
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </td>
    </tr>
  );
};

export default EditableRow;
