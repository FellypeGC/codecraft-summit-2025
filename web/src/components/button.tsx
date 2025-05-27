import type { ComponentProps, ReactNode } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {}

export function Button(props: IconButtonProps) {
  return (
    <button
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transistion-colors duration-300"
      {...props}
    />
  )
}
