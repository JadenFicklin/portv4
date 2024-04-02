// Define a type for the props to make it clear what the Button component expects
type ButtonProps = {
  text: string
}

// Update the Button component to accept a props object of type ButtonProps
export const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <button
        type="submit"
        className="px-6 py-1 mt-10 rounded-full border-[1px] duration-150 border-max bg-accentLight text-max hover:bg-max hover:text-accentLight hover:border-[1px] hover:border-accentLight"
      >
        {text}
      </button>
    </>
  )
}
