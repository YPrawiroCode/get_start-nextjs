import { useRouter } from "next/router";

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
      <h1> Dashboard</h1>
    </>
  );
};

export default Dashboard;
