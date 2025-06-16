import Link from "next/link";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className=" flex flex-row justify-center items-center gap-20  h-20 border-b-0 shadow-blue-100">
      <div className="flex flex-row items-center gap-2">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQHKhXkwlry9UQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1655316407125?e=2147483647&v=beta&t=4BdyGzR_3Qf6O1fYauh552uPLqUhdQ94v5NFmq7HUI0"
          alt=""
          className="w-10 h-10 rounded-full"
        />

        <p className="text-[#008000] font-bold">AI-DE</p>
      </div>

      <div className="flex gap-20">
        <Link href="/AI_page">AI-assistant</Link>

        <Link href="/Market_analysis">Market-analysis</Link>

        <Link href="/News">News and Alert</Link>

        <Link href="/Learning-Hub">Learning Hub</Link>
      </div>
      <div>
        <Link href="/login" className="text-[#008000] font-bold">
          Login
        </Link>
      </div>
    </nav>
  );
}
