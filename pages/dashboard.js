import { useRouter } from "next/router";
import { useState } from "react";

import FormCreateEmployee from "../components/FormCreateEmployee";
import profilPic from "../public/images/anonym.jpeg";
import Image from "next/image";
import Swal from "sweetalert2";

const Dashboard = () => {
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
      <FormCreateEmployee />

      <div>
        <h1>Footer</h1>
      </div>
    </>
  );
};

export default Dashboard;
