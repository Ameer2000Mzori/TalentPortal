import Badge from '../shared/badge'
import { jobsData } from './jobsData'
export default function JobsList() {
  return (
    <div className="text-[#2d2d2d]">
      {jobsData.map((job, index) => (
        <div
          key={index}
          className=" hover:shadow-[0px_0px_5px_5px_rgba(45,78,255,0.15)] transition-all duration-300 ease-in-out cursor-pointer relative pt-[15px] h-[300px] w-[100%] border border-[#cacaca] mt-[12px] rounded-[7px]"
        >
          <div className="flex flex-col w-[100%] h-[100%]  justify-start text-start items-start gap-[5px] pr-[6px] pl-[16px] pt-[5px] pb-[5px] overflow-hidden">
            <Badge data="new" />
            <p className="font-bold text-[19px]">
              {job.company}, {job.title}
            </p>
            <p className="mt-[5px] mb-[5px] font-[13px] text-slate-600">
              {job.location}
            </p>
            <p>{job.description}</p>
          </div>
          <div className=" absolute flex flex-row left-[5px] pr-[5px] pl-[5px] bottom-[5px] text-start items-center justify-center gap-[5px] text-[11px] text-slate-300">
            <p className="text-[15px] p-0 m-0">{job.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
