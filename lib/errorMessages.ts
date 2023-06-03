const requiredError = "This field is required"
const lengthError = ({ min, max }: { min?: number; max?: number }) => {
  if (min && max) {
    return `Between ${min} and ${max} characters long`
  } else if (min) {
    return `At least ${min} characters long`
  } else if (max) {
    return `At most ${max} characters long`
  }
}

export { requiredError, lengthError }
