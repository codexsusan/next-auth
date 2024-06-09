import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

interface ObscureInputProps {
  isObscure: boolean;
  value: string;
  placeholder?: string;
}

function ObscureInput({
  isObscure = true,
  value,
  placeholder = "Enter here...",
}: ObscureInputProps) {
  const [isHidden, setIsHidden] = useState(isObscure);
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className="w-full flex gap-x-2">
      <Input
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={isHidden ? "********" : placeholder}
        type={isHidden ? "password" : "text"}
        value={inputValue}
      />
      <Button
        onClick={() => setIsHidden((prev) => !prev)}
        type={"button"}
        variant={"outline"}
      >
        {isHidden ? (
          <Eye className="w-6 h-6" strokeWidth={"1.5"} />
        ) : (
          <EyeOff className="w-6 h-6" strokeWidth={"1.5"} />
        )}
      </Button>
    </div>
  );
}

export default ObscureInput;
