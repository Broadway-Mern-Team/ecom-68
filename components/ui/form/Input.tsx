'use client'
import { BaseSyntheticEvent, HTMLInputTypeAttribute } from "react";
import {Control, Controller, FieldValues, Path, useController} from "react-hook-form"
import Editor from "react-simple-wysiwyg";

type InputPropsType<T extends FieldValues> = Readonly<{
  type?: HTMLInputTypeAttribute;
  name: Path<T>;
  className?: string;
  placeholder?: string;
  errMsg?: string;
  control: Control<T>,
  rows?: number
}>;

export const Input = <T extends FieldValues>({type="text", name, className='', placeholder='Enter your data', errMsg='', control}: InputPropsType<T>) => {
  return (
    <>
      
      <Controller name={name} control={control} render={({ field }) => {
          return (
            <>
              <input
                {...field}
                id={name}
                type={type}
                className={` ${className} w-full border p-2 px-3 shadow rounded-md bg-gray-50 outline-gray-400 border-gray-400 placeholder:text-gray-400`}
                placeholder={`${placeholder}`}
              />
              <span className="text-red-800 text-sm italic font-semibold">
                {errMsg}
              </span>
            </>
          );
        }}
      />
    </>
  );
}



export const TextArea = <T extends FieldValues>({name, className='', placeholder='Enter your data', errMsg='', control, rows=7}: InputPropsType<T>) => {
  return (
    <>
      <Controller name={name} control={control} render={({ field }) => {
          return (
            <>
              <textarea
                {...field}
                id={name}
                rows={rows}
                className={` ${className} resize-none w-full border p-2 px-3 shadow rounded-md bg-gray-50 outline-gray-400 border-gray-400 placeholder:text-gray-400`}
                placeholder={`${placeholder}`}
              />
              <span className="text-red-800 text-sm italic font-semibold">
                {errMsg}
              </span>
            </>
          );
        }}
      />
    </>
  );
}


type RichTextProps = {
  value?: string, 
  onChange?: (html: string) => void,
  onBlur?: () => void
}
export const RichText = ({value = '', onChange, onBlur}: RichTextProps) => {
  return (
    <Editor 
      value={value}
      onChange={(e) => {
        const html = e.target.value; 
        const isEmpty = html.replace(/<br\s*\/?>|&nbsp;|\s/gi, '') === ''
        onChange?.(isEmpty ? '' : html)
      }}
      onBlur={onBlur}
      containerProps={{style: {minHeight: 300}}}
    />
  )
}


export const TextEditor = <T extends FieldValues>({name, className='', placeholder='Enter your data', errMsg='', control, rows=7}: InputPropsType<T>) => {
  return (
    <>
      <Controller name={name} control={control} render={({ field }) => {
          return (
            <>
              <RichText value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
              <span className="text-red-800 text-sm italic font-semibold">
                {errMsg}
              </span>
            </>
          );
        }}
      />
    </>
  );
}




type FileUploadProps<T extends FieldValues> = Readonly<{
  name: Path<T>, 
  className?: string, 
  errMsg?: string, 
  control: Control<T>,
  multiple?: boolean
}>
export const FileUpload = <T extends FieldValues>({multiple=false, name, className='', errMsg='', control}: FileUploadProps<T>) => {
  const {field} = useController({
    name: name, 
    control:control
  })
  return (
    <>
      <input
        type="file"
        onChange={(e: BaseSyntheticEvent) => {
          const files = Object.values(e.target.files); 
          if(multiple) {
            field.onChange(files)
          } else {
            field.onChange(files[0])
          }
        }}
        name={name}
        id={name}
        className={`${className} w-full border p-2 px-3 shadow rounded-md bg-gray-50 outline-gray-400 border-gray-400 placeholder:text-gray-400`}
      />
      <span className="text-sm italic text-red-800 font-semibold">
        {errMsg}
      </span>
    </>
  );
}


export type SingleOption = {
  label: string, 
  value: string
}
type SelectOptionProps<T extends FieldValues> = Readonly<{
  name: Path<T>,
  control: Control<T>, 
  className?: string, 
  errMsg?: string, 
  options?: Array<SingleOption>
}>
export const SelectOption = <T extends FieldValues>({name, control, className='', errMsg="", options=[]}: SelectOptionProps<T>) => {
  const {field}= useController({
    name: name, 
    control: control
  })

  return (
    <>
      <select
        className={` ${className} w-full border p-2 px-3 shadow rounded-md bg-gray-50 outline-gray-400 border-gray-400 placeholder:text-gray-400`}
        {...field}
      >
        <option value="">--Select Any One--</option>
        {
          options && options.map((row: SingleOption, index: number) => (
            <option key={index} value={row?.value}>{row?.label}</option>
          ))
        }

      </select>
      <span className="text-sm italic text-red-800 font-semibold">
        {errMsg}
      </span>
    </>
  );

}