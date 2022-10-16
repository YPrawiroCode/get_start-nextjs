import { useRouter } from "next/router";
import profilPic from "../public/images/anonym.jpeg";
import Image from "next/image";

const Dashboard = () => {
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
          <form>
            <div className="form-group mb-6">
              <input
                type="text"
                id="nameEmployee"
                name="nameEmployee"
                placeholder="Name Employee"
                className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput125"
                placeholder="Email address"
              />
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
