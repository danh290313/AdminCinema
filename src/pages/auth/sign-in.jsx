import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Field, Form, Formik } from "formik";
import InputField from "@/components/custom-fields/InputField";
import { signinSchema } from "@/utils/schemas";
import useAuth from "@/hooks/useAuth";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect } from "react";
const initVals = {
  username: "",
  password: "",
};
export function SignIn() {
  const { login, error, loading, currentUser } = useAuth();
  const nav = useNavigate();
  currentUser && nav("/dashboard/staff");
  const handleSubmit = async (val) => {
    console.log(val);
    login(val.username, val.password);
  };
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Formik
          initialValues={initVals}
          onSubmit={handleSubmit}
          validationSchema={signinSchema}
          validateOnBlur={true}
        >
          {(props) => (
            <Form>
              <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
                <CardHeader
                  variant="gradient"
                  color="blue"
                  className="mb-4 grid h-28 place-items-center"
                >
                  <Typography variant="h3" color="white">
                    Sign In
                  </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                  {/* <Input type="username" label="username" size="lg" />
                  <Input type="password" label="Password" size="lg" /> */}
                  <div className="w-full">
                    <Field
                      name="username"
                      component={InputField}
                      placeholder="username"
                    />
                  </div>
                  <div className="w-full">
                    <Field
                      name="password"
                      component={InputField}
                      placeholder="password"
                    />
                  </div>
                  {/* <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                  </div> */}
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    variant="gradient"
                    fullWidth
                    type="submit"
                    className="text-center"
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <ArrowPathIcon className="mr-4 h-5 w-5 animate-spin" />
                        Signing in
                      </div>
                    ) : (
                      " Sign In"
                    )}
                  </Button>
                  {/* {error && (
                    <div className="mt-3 mb-0 h-10 w-full rounded-md bg-red-500 text-center text-white ">
                      {error}
                    </div>
                  )} */}
                  <Typography
                    variant="small"
                    className="mt-6 flex justify-center"
                  >
                    Don't have an account?
                    <Link to="/auth/sign-up">
                      <Typography
                        as="span"
                        variant="small"
                        color="blue"
                        className="ml-1 font-bold"
                      >
                        Sign up
                      </Typography>
                    </Link>
                  </Typography>
                </CardFooter>
              </Card>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default SignIn;
