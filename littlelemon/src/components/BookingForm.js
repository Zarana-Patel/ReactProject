import React from 'react';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useNavigate } from 'react-router-dom';
import {
    Button,
    Heading,
    Stack,
    Flex,
    Box,
    Input,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
}from "@chakra-ui/form-control";

function BookingForm(props){
    const [date, setDate] = useState("");
  //  const [finalTime, setFinalTime] = useState("Select Time");
   // const [guest, setGuest] = useState();
   // const [occasion, setOccasion] = useState("select the Occasion");
    let occasions = [ 
        { label: "Birthday", value: "Birthday" },
        { label: "Anniversary", value: "Anniversary" },
        { label: "Valentine", value: "Valentine" },
        { label: "Promotion", value: "Valentine" }
    ];
    const initialValues = {
        date:  new Date().toLocaleDateString(),
        time:'',
        guest: '',
        occasion:''
    }
    const validationSchema = Yup.object({
        date:Yup.date()
                .required('Required'),
        time:Yup.string()
                .required('Required'),
        guest:Yup.string()
                .required('Required'),
        occasion:Yup.string()
                .required('Required'),
    });
        const nav=useNavigate();

    const formik = useFormik({
        initialValues: initialValues,
        validateOnChange: false,
        validationSchema: validationSchema,
        onSubmit: values => {
            const res = props.submitForm(values);
            if(res) {
              nav('/confirm',{replace: true});
            }
        },
    });

    useEffect(() => {
        const date = new Date(formik.values.date) ;
        const { initializeTimes } = props;
        initializeTimes(date);
    }, [formik.values.date]);
    
    return(
       <section className="form-fields">
        <Flex width="full" justify="center" alignItems='center'>
        <Box  w='600px' maxWidth="1000px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <Box p={4}>
                <Box textAlign="center">
                    <Heading>Book Now</Heading>
                 </Box>
            </Box>
            <Box p={6} textAlign="left">
                <form onSubmit={formik.handleSubmit}   validationschema={formik.validationSchema}>    
                    <FormControl>
                        <FormLabel htmlFor="data">Choose Date:</FormLabel>
                        <Input id="date" name="date" type="date" key={date} value={formik.values.date} 
                    onChange={formik.handleChange}  />
                    {formik.errors.date ? 
                        <div>{formik.errors.date}</div> : null}
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel htmlFor="data">Choose Time:</FormLabel>
                            <Stack spacing={3}>
                                <Select name="time" variant='outline' placeholder='Select Time'  onChange={formik.handleChange} >
                                    {props.availableTimes?.map((time) => <option  name={time} key={time} value={time}>{time}</option>)}
                            </Select>
                            </Stack>
                            {formik.errors.time ? 
                            <div>{formik.errors.time}</div> : null}
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel htmlFor="data">Number of Guests:</FormLabel>
                        <NumberInput name="guest" defaultValue={formik.initialValues.guest} min={1} max={12} onChange={(valueString) => formik.setFieldValue('guest', valueString)}>
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        {formik.errors.guest ? 
                            <div>{formik.errors.guest}</div> : null}
                    </FormControl>
                    <FormControl mt={6}>
                        <FormLabel htmlFor="data">Choose Occasion:</FormLabel>
                        <Stack spacing={3}>
                            <Select id="occasion" name="occasion" placeholder='Select Occasion' onChange={formik.handleChange} >
                                {occasions.map((occasion)=><option key={occasion.label} value={occasion.value}>{occasion.label}</option>)
                                }
                            </Select>
                        </Stack>
                    </FormControl>
                    {formik.errors.occasion ? 
                            <div>{formik.errors.occasion}</div> : null}
                    <Button className="btn-book-table" width="full" mt={4} type="submit"  isDisabled={!(formik.isValid || formik.dirty)}>Book Table</Button>
                </form>
            </Box>
        </Box>
    </Flex>

       </section>
    )
}
export default BookingForm;