"use client";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "sonner";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";

type CardComponentProps = {
  children: React.ReactNode;
  title: string;
};

export const CardComponent: React.FC<CardComponentProps> = ({
  children,
  title,
}) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const getCode = () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    flushSync(() => {
      root.render(children as any);
    });

    const code = div.innerHTML;
    return code;
  };

  const onCopy = () => {
    const code = getCode();
    toast.success("Copied to clipboard!");
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <div className="space-y-3">
      <div className="relative flex items-center gap-3">
        <div
          className="relative cursor-pointer rounded-md bg-white p-2 text-sm shadow-xl"
          onClick={onCopy}
        >
          <div
            className={`absolute inset-0 transform transition-all duration-300  ${
              hasCheckIcon ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <CopyIcon className="text-neutral-600" />
          </div>
          <div
            className={`absolute inset-0 transform transition-all duration-300  ${
              hasCheckIcon ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <CheckIcon className="text-neutral-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  );
};
