import { jobsData } from './jobsData'
export default function JobsList() {
  return (
    <div className="">
      {jobsData.map((job, index) => (
        <div
          key={index}
          className="h-[100px] w-[100%] border border-[#cacaca] mt-[12px] rounded-[7px]"
        >
          <h1>{job.title}</h1>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  )
}
