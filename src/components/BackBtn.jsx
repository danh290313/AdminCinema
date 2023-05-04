import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function BackBtn({ to }) {
  const nav = useNavigate();
  return (
    <div
      className="group my-2 max-w-[80px] cursor-pointer"
      onClick={() => nav(to)}
    >
      <div className="flex items-center">
        <ArrowLeftIcon className="h-5 w-5" />
        <div className="ml-4 font-semibold group-hover:underline">Back</div>
      </div>
    </div>
  );
}

export default BackBtn;
