# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![2023-06-24 09 38 30 multi-step-form-mauve-three vercel app 58c5cdaa6e39](https://github.com/MidasVE/multi-step-form/assets/26002295/096474eb-a791-4fda-8925-934a32f5d546)

### Links

- [Live Site URL](https://multi-step-form-mauve-three.vercel.app)

## My process

### Built with

- Tailwind
- [React](https://reactjs.org/) - JS library
- [Next.js 13](https://nextjs.org/) - React framework
- [Tailwind](https://tailwindcss.com) - For styles
- [Jotai](https://jotai.org) - For global state management
- [Shadcn/ui](https://ui.shadcn.com) - As a component library
- [React hook form](https://react-hook-form.com) - For form rendering
- [Zod](https://zod.dev) - For form validation

### What I learned

For certain fields, I had to create a field with multiple options. First, I just added these in the jsx manually, but I learned quickly that I had to do it differently if I wanted to keep the code maintainable. So I created `Map` and learned how to loop over it:

```typescript
export const planPricing = new Map([
  [
    "arcade",
    {
      name: "Arcade",
      price: {
        monthly: 9,
        yearly: 90,
      },
    },
  ],
  [
    "advanced",
    {
      name: "Advanced",
      price: {
        monthly: 12,
        yearly: 120,
      },
    },
  ],
  [
    "pro",
    {
      name: "Pro",
      price: {
        monthly: 15,
        yearly: 150,
      },
    },
  ],
] as const)
```

```typescript
{Array.from(planPricing.entries()).map(([key, value]) => (
                    <FormItem key={key}>
                      <FormLabel htmlFor={key}>
                        <FormControl>
                          <RadioGroupItem
                            className="sr-only"
                            value={key}
                            id={key}
                          />
                        </FormControl>
                        <Card className="cursor-pointer border hover:border-primary">
                          <CardContent className="flex gap-4 p-4 lg:flex-col lg:gap-8">
                            <Image
                              src={`/icon-${key}.svg`}
                              width={40}
                              height={40}
                              alt={key}
                            />
                            <div className="flex flex-col gap-2">
                              <span className="font-bold">{value.name}</span>
                              {yearlyBillingValue ? (
                                <>
                                  <span className="text-muted">
                                    €{value.price.yearly}/yr
                                  </span>
                                  <span>2 months free</span>
                                </>
                              ) : (
                                <span className="text-muted">
                                  €{value.price.monthly}/mo
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </FormLabel>
                    </FormItem>
                  ))}
```

## Author

- Website - [Midas]([https://](https://www.thegoldentouch.be)
- Frontend Mentor - [@MidasVE](https://www.frontendmentor.io/profile/MidasVE)
