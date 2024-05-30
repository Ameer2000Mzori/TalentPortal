import SelectedJob from '../job/job'
import JobsList from '../jobslist/jobsList'

export default function JobsPage() {
  return (
    <div className="h-auto bg-white  ">
      <div className="h-auto flex flex-row text-center items-start justify-center gap-[25px] ">
        <div className="w-[25%] h-auto pb-[2rem] ">
          <JobsList />
        </div>
        <div className="w-[30%] h-[900px] border border-[#949494] ">
          <SelectedJob />
        </div>
      </div>
      <div className="h-[26px] bg-black"></div>
    </div>
  )
}
