import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, isError, ...props }, ref) => {


  return (
    (
    <input
      type={type}
      className={cn(
         "flex h-14 w-full rounded border focus:border-input text-color-dark-gray focus:text-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        isError ? "border-color-error" : "border-color-dark-gray",
        className
      )}
      ref={ref}
      {...props} />
    )
  );
})
Input.displayName = "Input"

export { Input }
