export interface ButtonGroupProps {
  backButton?: React.ReactNode
  nextButton: React.ReactNode
}

export default function ButtonGroup({
  backButton,
  nextButton,
}: ButtonGroupProps) {
  return (
    <div className="fixed bottom-0 left-0 mt-auto flex w-full items-center justify-between bg-white p-4 md:static md:p-0">
      {backButton}
      {nextButton}
    </div>
  )
}
