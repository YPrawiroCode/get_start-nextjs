import { useRouter } from "next/router";
import profilPic from "../public/images/anonym.jpeg";
import Image from "next/image";
import { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

import Swal from "sweetalert2";

async function createEmployee(credentials) {
  return fetch(
    "https://ms-yusufprawiro-betest.cyclic.app/api/employee/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(credentials),
    }
  ).then((data) => data.json());
}

const Dashboard = () => {
  const [date_join, setSelectedDate] = useState();

  const [employeeName, setEmployeeName] = useState();

  const [status, setStatus] = useState();
  const [division, setDivision] = useState();

  const [gender, setGender] = useState();
  const [address, setAddress] = useState();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await createEmployee({
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
  const router = useRouter();
  if (process.browser) {
    if (localStorage != undefined) {
      const token = localStorage.getItem("token");
      if (token == null) {
        router.push("/");
      } else {
      }
    }
  }

  return (
    <>
      <div className="flex flex-row-reverse bg-green-400 h-8">
        <div className="p-1 pl-3">
          <h1>Admin</h1>
        </div>
        <div>
          <Image
            src={profilPic}
            alt="Picture of the author"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
        <div className="p-1 pr-3 text-right">
          <h1>Welcome Back</h1>
        </div>
      </div>
      <div className="flex justify-center items-center w-full py-5">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <input
                type="text"
                id="nameEmployee"
                name="nameEmployee"
                placeholder="Name Employee"
                className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => setEmployeeName(e.target.value)}
              />
            </div>
            <div className="form-group mb-6">
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
            </div>
            <div className="flex form-group mb-6 pr-5">
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
            </div>
            <div className="form-group mb-6">
              <input
                type="text"
                id="division"
                name="division"
                placeholder="Division"
                className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                onChange={(e) => setDivision(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 pb-4">
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
            </div>
            <div className="form-group mb-6">
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="address"
                name="address"
                rows="2"
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group form-check text-center mb-6"></div>
            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Create
            </button>
          </form>
        </div>
      </div>
      <div>
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default Dashboard;
