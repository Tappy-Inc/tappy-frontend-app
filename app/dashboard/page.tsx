import Link from "next/link";

const dashboard = async () => {
  return (
    <div>
      Dashboard
      <Link href="/">Go back</Link>
    </div>
  );
};

export default dashboard;
