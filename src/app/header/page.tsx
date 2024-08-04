import Link from 'next/link'

export default function Header() {
  return (
    <div className="pl-[24px]  pr-[24px] text-[#000000] h-[73px] bg-white flex flex-row text-center items-center justify-center border-b border-slate-300">
      <div className=" h-[100%] w-[100%] xl:w-[70%] flex flex-row text-center items-center justify-between">
        <div className="flex flex-row text-center items-center justify-between gap-[22px] font leading-[24px] text-[14px] h-[100%]">
          <Link href={'/'}>
            <h1 className=" text-[24px] flex flex-col justify-center text-start  text-[#013a9bff] font-bold">
              TALENT<i className="text-[13px] p-[0px] m-[0px]">PORTAL</i>
            </h1>
          </Link>
          <div className="h-[30%] w-[1px] bg-slate-300"></div>
          <Link href={'/'}>
            <h1>Home</h1>
          </Link>
        </div>
        <div className="flex flex-row text-center items-center justify-between gap-[22px] h-[100%] font leading-[24px] text-[14px] ">
          <div className="flex flex-row text-center items-center justify-center gap-[5px]">
            <Link href="/">
              <h1 className="text-[14px] text-[#2d2d2d] leading-[21px] underline">
                create account
              </h1>
            </Link>
            <p> or </p>

            <Link href={'/'}>
              <h1 className="text-[14px] text-[#2d2d2d] leading-[21px] underline">
                login
              </h1>
            </Link>
          </div>
          <div className="h-[30%] w-[1px] bg-slate-300"></div>
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
