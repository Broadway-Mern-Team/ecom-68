'use client'

import { Control, FieldValues, Path, useController } from "react-hook-form";

type SingleOption = {
  label: string, 
  value: string
}
type SelectProps<T extends FieldValues> = Readonly<{
  name: Path<T>, 
  className?: string,
  options: Array<SingleOption>,
  control: Control<T>
}>

export function Select<T extends FieldValues>({name, className='', options, control}: SelectProps<T>) {
  const {field} =useController({
    name: name, 
    control: control
  })
  return (
    <select
      {...field}
      id={name}
      className={`w-full border p-2 px-3 outline-gray-400 border-gray-400 
        bg-gray-50 shadow rounded-md ${className}`}
    >
      <option value="">-- Select Any One --</option>
      {options &&
        options.map((option: SingleOption, i: number) => {
          return (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          );
        })}
    </select>
  );
}