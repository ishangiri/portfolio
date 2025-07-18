'use client';
import React, {useState} from 'react'
import { fetchUtil } from '@/lib/fetchUtil';
import FormComponent from './HireMeComponents/FormComponent';
import DialogComponent from './DialogComponent';

const Contact = () => {

const [isLoading, setIsLoading] = useState(false);
const [isOpen, setIsOpen] = useState(false);


const handleModalClick = () => {
  setIsOpen(false);
}

//form submission logic
  const handleSubmit = async(values) => {
    try{
      setIsLoading(true);
      console.log(values);
     const response = await fetchUtil.post('/api/send-email', values);
      setIsLoading(false);
      setIsOpen(true);
     return response.data;
    }catch(e){
      console.log(e)
      setIsLoading(false);
    }
  } 

  return (
    <div id='contact'>
      <DialogComponent setOpen={setIsOpen} open={isOpen} onClick={handleModalClick} title="Form Submission Successful" desc="Thank you for contacting, I will reply to you soon." />
      <FormComponent isLoading={isLoading} onSubmit={handleSubmit} />
    </div>
  )
}

export default Contact;