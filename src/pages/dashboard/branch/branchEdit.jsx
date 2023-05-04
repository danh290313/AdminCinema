import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { FormGroup, Grid, Input } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import { Link, useNavigate,useParams } from "react-router-dom";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
import { BranchSchema } from "@/utils/schemas";
import useBranch from "@/hooks/useBranch";
import BackBtn from "@/components/BackBtn";
import { useState,useEffect } from "react";

const initialValues = {
  name: "",
  address: "",
  phoneNumber: "",
  dateOpened: "",
  active: 1,
};

function BranchAdd() {
  const [branch, setBranch] = useState(null);
  const {} = useBranch();

  let { id } = useParams();
  id = +id;
  const { getBranch, editBranch } = useBranch();
  const initialValues = {
    id: id,
    name: branch?.name,
    address: branch?.address,
    phoneNumber: branch?.phoneNumber, 
    dateOpened: branch?.dateOpened,
    active: branch?.active,
  };
  console.log({ initialValues });
  useEffect(() => {
    (async () => {
      const res = await getBranch(id);
      // console.log({ res });
      setBranch(res?.data?.data);
    })();
  }, []);
  const handleSubmit = (value) => {
    console.log({ value });
    editBranch(id, value);
  };
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <BackBtn to="/dashboard/branch" />
      <Card>
        <CardBody>
          <Formik
            initialValues={initialValues}
            validationSchema={BranchSchema}
            onSubmit={handleSubmit}
            validateOnBlur={true}
          >
            {(props) => {
              //do somthing here
              // console.log(props);
              return (
                <>
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <FastField
                            name="name"
                            component={InputField}
                            label="Full name"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="address"
                            component={InputField}
                            label="Address"
                          />
                        </FormGroup>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="phoneNumber"
                            component={InputField}
                            label="Phone Number"
                          />
                        </FormGroup>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Field
                              name="dateOpened"
                              component={DatePickerField}
                              label="Date Opened"
                              inputFormat="DD/MM/YYYY"
                            />
                          </LocalizationProvider>
                        </FormGroup>
                      </Grid>
                    
                     
                      <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="active"
                            component={SwitchField}
                            label="active"
                          />
                        </FormGroup>
                      </Grid>
                    </Grid>

                    <Button
                      variant={"gradient"}
                      type="submit"
                      color={"red"}
                      className="mt-4 flex items-center py-1 px-6 capitalize"
                    >
                      <Typography
                        color="inherit"
                        className=" font-medium capitalize"
                      >
                        Save
                      </Typography>
                    </Button>
                  </Form>
                </>
              );
            }}
          </Formik>
        </CardBody>
      </Card>
    </div>
  );
}

export default BranchAdd;
