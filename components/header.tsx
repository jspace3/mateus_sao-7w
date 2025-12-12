import Image from "next/image"

export function Header() {
  return (
    <header className="bg-[#F58220] py-3">
      <div className="container mx-auto flex justify-center px-4">
        <Image
          src="/images/15.png"
          alt="Casa Geriátrica São Mateus"
          width={200}
          height={56}
          loading="lazy"
          className="h-12 md:h-14 w-auto"
          style={{
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>
    </header>
  )
}
