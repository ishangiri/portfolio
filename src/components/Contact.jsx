'use client';
import React, {useState} from 'react'
import { fetchUtil } from '@/lib/fetchUtil';
import FormComponent from './HireMeComponents/FormComponent';

const Contact = () => {

const [isLoading, setIsLoading] = useState(false);
//form submission logic
  const handleSubmit = async(values) => {
    try{
      setIsLoading(true);
      console.log(values);
     const response = await fetchUtil.post('/api/send-email', values);
      setIsLoading(false);
     return response.data;
    }catch(e){
      console.log(e)
      setIsLoading(false);
    }
  } 

  return (
    <div id='contact'>
      <FormComponent isLoading={isLoading} onSubmit={handleSubmit} />
    </div>
  )
}

export default Contact;