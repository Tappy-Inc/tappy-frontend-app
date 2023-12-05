import { api } from "@/utils/api";
import Link from "next/link";

const dashboard = async () => {
  const session = await api.auth.session();

  console.log(session);

  return (
    <div>
      {session.result === 200 ? (
        <div>session active</div>
      ) : (
        <div>session not active</div>
      )}
      <Link href="/">Go back</Link>
    </div>
  );
};

export default dashboard;
