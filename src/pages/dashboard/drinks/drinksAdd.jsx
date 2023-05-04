import { Button, Card, CardBody, Typography,Input } from "@material-tailwind/react";
import * as Yup from "yup";
import { Divider, FormGroup, Grid } from "@mui/material";
import { FastField, Field, Form, Formik } from "formik";
import SelectField from "@/components/custom-fields/SelectField/SelectField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DatePickerField from "@/components/custom-fields/DatePickerField/DatePickerField";
import { Link, useNavigate, useParams } from "react-router-dom";
import InputField from "@/components/custom-fields/InputField";
import SwitchField from "@/components/custom-fields/SwitchField/SwitchField";
import UploadAndDisplayImage from "@/components/Upload";
import { useState, useEffect } from "react";
import TextAreaField from "@/components/custom-fields/TextAreaField/TextAreaField";
import { toast } from "react-toastify";
import { MovieSchema } from "@/utils/schemas";
import useMovie from "@/hooks/useMovie";



function MovieAdd() {
  const [smallImage, setSmallImage] = useState(null);
  const [largeImage, setLargeImage] = useState(null);
  const [Movie, setMovie] = useState();

  const [needValidate, setNeedValidate] = useState(true);
  const nav = useNavigate();
  const { addMovie } = useMovie();


  const initialValues = {
    name: "",
    smallImageURl: "",
    shortDescription: "",
    longDescription: "", 
    largeImageURL: "", 
    director: "", 
    actors: "", 
    categories: "", 
    releaseDate: "", 
    duration: "",
    trailerURL: "", 
    language: "", 
    rated: "", 
    isShowing: 1, 
  };


  const handleSubmit = (value) => {
    console.log('first', value);
    const reContructValue = {
     
      name: value.name,
      smallImageURl: smallImage,
     shortDescription: value.shortDescription,
     longDescription: value.longDescription, 
      largeImageURL: largeImage, 
      director: value.director, 
      actors: value.actors, 
      categories: value.categories, 
      releaseDate: value.releaseDate,  
      duration: value.duration,
      trailerURL: value.trailerURL, 
      language: value.language, 
      rated: value.rated,  
     isShowing: 1, 
    };
    console.log('after release', reContructValue);
       addMovie(reContructValue);
  }

  const handleSmallImage = (event) => { 
  
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      setSmallImage(event.target.result);
    };
    reader.readAsDataURL(file);
    
  }

  const handleLargeImage = (event) => { 
  
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      setLargeImage(event.target.result);
    };
    reader.readAsDataURL(file);
    
  }
  


  return (


    <div className="mt-12 mb-8 flex flex-col gap-12 ">
      <Formik
        initialValues={initialValues}
        validationSchema={MovieSchema}
        onSubmit={handleSubmit}
        validateOnBlur={true}
      >
        {
         
        () => {
          return (
  
            <Grid container spacing={2}>
              <Grid item md={6} sm={12}>
                <Card>
                  <CardBody>
                    <Grid item xs={12} md={12}>
                      <div className="h-[300px] w-full">
                        <img
                          alt="image not found"
                          src={smallImage == null ? `/src/assets/icon/NoImage.jpg` : smallImage}
                          className="h-full w-full rounded-l  g object-contain border-4 border-indigo-600 rounded-lg border-red-600"
                        />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <FormGroup>
                         <Input type="file" name='fileSmallImage' onChange={handleSmallImage} />
                      </FormGroup>
                    </Grid>

                  

                    <Grid item xs={12} md={12}>
                      <FormGroup>
                      
                          <Field
                            name="director"
                            component={InputField}
                            label="director"
                          />
                      
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <FormGroup>
                     
                          <Field
                            name="actors"
                            component={InputField}
                            label="actors"
                          />
                       
                      </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={12}>
                          <FormGroup>
                            <Field
                              name="trailerURL"
                              component={InputField}
                              label="trailerURL"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <FormGroup>
                            <Field
                              name="language"
                              component={InputField}
                              label="language"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <FormGroup>
                            <Field
                              name="rated"
                              component={InputField}
                              label="rated"
                            />
                          </FormGroup>
                        </Grid>

                    <Grid item xs={12} md={12}>
                      <FormGroup>
                    
                          <Field
                            name="shortDescription"
                            component={TextAreaField}
                            label="shortDescription"
                          />
                       
                      </FormGroup>
                    </Grid>
                 
                  </CardBody>
                </Card>
              </Grid>
              <Grid item md={6} sm={12}>
                <Card>
                  <CardBody>
                    <Form>

                    <Grid item xs={12} md={12}>
                      <div className="h-[300px] w-full">
                        <img
                          alt="Large Image"
                          src={largeImage == null ? `/src/assets/icon/NoImage.jpg` : largeImage} 
                          className="h-full w-full rounded-l  g object-contain border-4 border-indigo-600 rounded-lg border-red-600"
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                      <FormGroup>
                         <Input type="file" name='fileLargeImage' onChange={handleLargeImage} />
                      </FormGroup>
                      </Grid>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                          <FormGroup>
                            <FastField
                              name="name"
                              component={InputField}
                              label="Name"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <FormGroup>
                            <Field
                              name="categories"
                              component={InputField}
                              label="categories"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <FormGroup>
                          
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <Field
                                name="releaseDate"
                                component={DatePickerField}
                                label="releaseDate"
                              />
                            </LocalizationProvider>
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <FormGroup>
                            <Field
                              name="duration"
                              component={InputField}
                              label="duration"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={12}>
                      <FormGroup>
                      
                          <Field
                            name="longDescription"
                            component={TextAreaField}
                            label="longDescription"
                          />
                       
                      </FormGroup>
                    </Grid>
                        

                        <Divider className="!mt-4 w-full" />
                        

                        <Grid item xs={12} md={6}>
                        <FormGroup>
                          <Field
                            name="isShowing"
                            component={SwitchField}
                            label="isShowing"
                            confirm={"Deactive this staff ?"}
                          />
                        </FormGroup>
                      </Grid>
                        <Divider className="!my-5 w-full" />
                      </Grid>

                      <div className="flex">
                        <Button
                          variant={"gradient"}
                          color={"blue"}
                          className="mt-4 mr-6 flex items-center py-1 px-6 capitalize"
                          type="button"
                          onClick={() => nav("/dashboard/movie")}
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
                  </CardBody>
                </Card>
              </Grid>
            </Grid>
          );
        }}
      </Formik>
    </div>
  );
}

export default MovieAdd;
