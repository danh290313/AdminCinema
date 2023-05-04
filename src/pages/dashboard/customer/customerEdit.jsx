import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import { FormGroup, Grid } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import { Link, useParams } from "react-router-dom";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
import { customerSchema } from "@/utils/schemas";
import useCus from "@/hooks/useCus";
import { useEffect } from "react";
import { useState } from "react";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";
import BackBtn from "@/components/BackBtn";
function CustomerEdit() {
  const [cus, setCus] = useState(null);
  let { id } = useParams();
  id = +id;
  const { getCus, editCus } = useCus();
  const initialValues = {
    id: id,
    name: cus?.name,
    gender: cus?.gender,
    phone_number: cus?.phoneNumber || cus?.phone_number,
    dob: cus?.dob,
    active: cus?.active,
  };
  useEffect(() => {
    (async () => {
      const res = await getCus(id);
      setCus(res?.data);
    })();
  }, []);
  console.log(initialValues, "test");
  const handleSubmit = (value) => {
    console.log({ value });
    editCus(id, value);
  };
  return (
    cus && (
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <BackBtn to={"/dashboard/customer"} />
        <Card>
          <CardBody>
            <Formik
              initialValues={initialValues}
              validationSchema={customerSchema}
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
                              name="phone_number"
                              component={InputField}
                              label="Phone"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormGroup>
                            <Field
                              name="gender"
                              component={SelectField}
                              value="value"
                              label="Gender"
                              options={[
                                { id: 0, value: "Nam" },
                                { id: 1, value: "Nữ" },
                              ]}
                              defaultOp="Choose Gender"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormGroup>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <Field
                                name="dob"
                                component={DatePickerField}
                                label="Day of birth"
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
                              confirm={"Deactive this customer ?"}
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                      <Button
                        variant={"gradient"}
                        type="submit"
                        color={"blue"}
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
    )
  );
}

export default CustomerEdit;
