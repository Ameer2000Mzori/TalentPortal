import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <div className="text-[#000000] h-[73px] ">
        <h1 className="text-[#013a9bff] ">
          TALENT <i>PORTAL</i>
        </h1>

        <Link href={'/'}>
          <h1>Home</h1>
        </Link>
      </div>
      <div></div>
    </div>
  )
}
