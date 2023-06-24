import Image from "next/image"

export default function Page() {
  return (
    <div className="my-auto flex flex-col items-center gap-4 text-center md:-translate-y-8">
      <Image
        src="/icon-thank-you.svg"
        width={80}
        height={80}
        alt="thank you"
        className="mb-4"
      ></Image>
      <h1 className="mb-0">Thank you!</h1>
      <p className="text-muted">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  )
}
