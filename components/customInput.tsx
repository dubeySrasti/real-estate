import React from "react";

interface CustomInputProps {
    label: string;
    type?: string;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required?: boolean;
}

export default function CustomInput({
    label,
    type = "text",
    id,
    name,
    value,
    onChange,
    placeholder,
    required = false
}: CustomInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-[14px] font-normal text-[#000000]">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-[13px] py-[14px] border-[1px] border-[#A6A6A6] rounded-[8px] text-[14px] text-[#000000] placeholder-[#C4C4C4] bg-[#FFFFFF] focus:outline-none focus:border-transparent focus:bg-[#F1F1FE] focus:shadow-lg transition-all duration-300"
                style={{
                    background: value
                        ? "linear-gradient(#F1F1FE, #F1F1FE) padding-box, linear-gradient(180deg, #170085, #6246EA) border-box"
                        : "#FFFFFF",
                    border: value ? "1px solid transparent" : "0.8px solid #A6A6A6"
                }}
                onFocus={(e) => {
                    e.target.style.background =
                        "linear-gradient(#F1F1FE, #F1F1FE) padding-box, linear-gradient(180deg, #170085, #6246EA) border-box";
                    e.target.style.border = "1px solid transparent";
                }}
                onBlur={(e) => {
                    if (!value) {
                        e.target.style.background = "#FFFFFF";
                        e.target.style.border = "1px solid #A6A6A6";
                    }
                }}
                required={required}
            />
        </div>
    );
}
