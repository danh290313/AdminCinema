import {
  DocumentIcon,
  DocumentTextIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RecipesIcon } from "@/assets/icon";
function MovieCard({ data }) {
  return (
    <Card className="w-full">
      <CardBody>
        <div className="flex justify-between">
          <img
            src={data?.smallImageURl}
            alt=""
            className="mr-10 w-[100px] h-[150px]  "
          />

          <div className="mt-4 flex basis-2/3  flex-col flex-initial w-72">
            <Typography variant="h5" className="cursor-default text-red-700">
              {data?.name}
            </Typography>
            <p
              variant="small"
              className="max-h-[100px] overflow-hidden font-bold"
            >
              Director: {data?.director}
            </p>

            <div>
              <div className="text-bold">Release date: {data?.releaseDate}</div>
            </div>
            

            <Chip value={data?.categories} className="" />
          </div>

          <div className="flex  flex-col flex-initial w-20 ">
            <Chip
              value={data.isShowing == 1 ? "active" : "unactive"}
              className="bg-green-400"
            />

           
          </div>
        </div>

        <div className="flex">
          <div className="ml-auto flex items-center justify-between space-x-3">
            <Link to={`info/${data?.id}`}>
              <Tooltip content="see info">
                <InformationCircleIcon className="h-7 w-7 text-light-blue-500" />
              </Tooltip>
            </Link>
         
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default MovieCard;
