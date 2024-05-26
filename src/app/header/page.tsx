import Link from 'next/link'

export default function Header() {
  return (
    <div className="pl-[24px]  pr-[24px] text-[#000000] h-[73px] bg-white flex flex-row text-center items-center justify-center">
      <div className=" h-[100%] w-[75%] flex flex-row text-center items-center justify-between">
        <div className="flex flex-row text-center items-center justify-between gap-[22px] font leading-[24px] text-[14px] h-[100%]">
          <Link href={'/'}>
            <h1 className=" text-[24px] flex flex-col justify-center text-start  text-[#013a9bff] font-bold">
              TALENT<i className="text-[13px] p-[0px] m-[0px]">PORTAL</i>
            </h1>
          </Link>
          <div className="h-[60%] w-[1px] bg-slate-300"></div>
          <Link href={'/'}>
            <h1>Home</h1>
          </Link>
        </div>
        <div>
          <Link href="/">
            <h1 className="text-[14px] text-[#2d2d2d] leading-[21px] underline">
              post job!
            </h1>
          </Link>
        </div>
      </div>
    </div>
  )
}
