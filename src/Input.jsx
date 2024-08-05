import React from 'react';
import { useField } from 'formik';
export default function Input({name,label,id,...rest}){
  const field=useField(name);
  const [data,meta]=field;
  const {value,onBlur,onChange}=data;
  const {error,touched}=meta;
 let borderClass=" border-gray-500";
  if(error && touched)
  {
    borderClass=" border-primary-dark";
  }
  return(
    <>
    <label htmlFor={id} className="sr-only">{label}</label>
    <input onBlur={onBlur}  name={name} value={value} onChange={onChange} id={id}  className={"border-2 p-2 w-full " + borderClass }{...rest} />
    {touched && error && <div className=" font-thin text-primary-dark text-xs self-end">{error}</div>}
    </>
  );
}