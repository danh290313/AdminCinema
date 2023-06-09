import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import * as Yup from "yup";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  FormGroup,
  Grid,
  Slide,
} from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
import { useNavigate, useParams } from "react-router-dom";
import { staffSchema2 } from "@/utils/schemas";
import useBranch from "@/hooks/useBranch";
import { forwardRef, useEffect, useState } from "react";
import useStaff from "@/hooks/useStaff";
import ConfirmDialog from "@/components/ConfirmDialog";
import BackBtn from "@/components/BackBtn";

function StaffEdit() {
  const nav = useNavigate();
  const { id } = useParams();
  const [staff, setStaff] = useState();
  const { getBranches } = useBranch();

  const { getPositions, getStaff, editStaff } = useStaff();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    // setStaff(getStaff(id));
    (async () => {
      const res = await getStaff(id);
      setStaff(res);
    })();
   
  }, []);


  const initialValues = {
    id: id,
    name: staff?.name,
    birthday: staff?.birthday,
    phone_number: staff?.phone_number,
    address: staff?.address,
  }

  const handleSubmit = (valSubmit) => {
   
    const handleOK = () => {
      editStaff(id, valSubmit);
      (async () => {
        const res = await getStaff(id);
        setStaff(res);
      })();
      nav("/dashboard/staff");
     
    };
    handleOK();
     };
   

    return (
      staff &&
      (
        <div className="mt-12  flex flex-col gap-4">
          <BackBtn to="/dashboard/staff" />
          <Card>
            <CardBody>
              <Formik
                initialValues={initialValues}
                validationSchema={staffSchema2}
                onSubmit={handleSubmit}
                validateOnBlur={true}
              >
                {(props) => {
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
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Field
                                  name="birthday"
                                  component={DatePickerField}
                                  label="Day of birth"
                                />
                              </LocalizationProvider>
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
                          
                        </Grid>
                        
                        
                        <div className="flex">
                          <Button
                            variant={"gradient"}
                            color={"blue"}
                            className="mt-4 mr-6 flex items-center py-1 px-6 capitalize"
                            type="button"
                            onClick={() => nav("/dashboard/staff")}
                          >
                            <Typography
                              color="inherit"
                              className=" font-medium capitalize"
                            >
                              Back
                            </Typography>
                          </Button>
                          <Button
                            variant={"gradient"}
                            color={"red"}
                            className="mt-4 flex items-center py-1 px-6 capitalize"
                            type="submit"
                          >
                            <Typography
                              color="inherit"
                              className=" font-medium capitalize"
                            >
                              Save
                            </Typography>
                          </Button>
                        </div>
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



export default StaffEdit;
