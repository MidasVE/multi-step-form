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

export const addOnPricing = new Map([
  [
    "onlineService",
    {
      name: "Online Service",
      description: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
    },
  ],
  [
    "largerStorage",
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ],
  [
    "customizableProfile",
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
    },
  ],
] as const)
