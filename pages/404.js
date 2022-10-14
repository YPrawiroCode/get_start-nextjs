import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="not-found">
      <h1>Oooooops.....</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go Back to the{" "}
        <Link href="/">
          <a>Login</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
