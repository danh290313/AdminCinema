import { InformationCircleIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function DrinkCardSkeleton() {
  // console.log({ data });
  return (
    <Card className="w-full">
      <CardBody>
        <div className="flex animate-pulse justify-between">
          {/* <img src={data.imageSource} alt="" className="mr-10 w-[50px]" />
           */}
          <div className="h-[50px] w-[50px] rounded-lg bg-gray-200 "></div>
          <div className="flex justify-between">
            <div className="h-6 w-16 rounded-md bg-gray-200"></div>
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-between">
          <Typography variant="h5" className=" cursor-default"></Typography>

          {/* <Chip value="40.0000 đ" /> */}
          <div className="h-8 w-20 rounded-md bg-gray-200"></div>
        </div>
        <p
          // variant="small"
          className="max-h-[100px] cursor-default  overflow-hidden"
        ></p>
        <div className="flex">
          <div>
            {/* <span className="mr-10 cursor-default">Sale on day: 0</span> */}
            <div className="h-5 w-20 rounded-md bg-gray-200"></div>
            <div className="mt-2 h-5 w-40 rounded-md bg-gray-200"></div>
          </div>
          <div className="ml-auto flex items-center justify-between">
            {/* <Link to={`info/${"a"}`}>
              <Tooltip content="see recipes">
                <InformationCircleIcon className="h-7 w-7 text-light-blue-500" />
              </Tooltip>
            </Link> */}
            <div className="mt-2 h-6 w-6 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default DrinkCardSkeleton;
