export interface ButtonGroupProps {
  backButton?: React.ReactNode
  nextButton: React.ReactNode
}

export default function ButtonGroup({
  backButton,
  nextButton,
}: ButtonGroupProps) {
  return (
    <div className="mt-auto flex items-center justify-between">
      {backButton}
      {nextButton}
    </div>
  )
}
