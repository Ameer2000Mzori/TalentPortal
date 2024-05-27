import SelectedJob from '../job/job'
import JobsList from '../jobslist/jobsList'

export default function JobsPage() {
  return (
    <div className="h-[100vh] bg-white">
      <div className="h-[95%] flex flex-row text-center items-center justify-center gap-[25px]">
        <div className="w-[30%] h-[92%] overflow-hidden">
          <JobsList />
        </div>
        <div className="w-[30%] h-[90%] border border-[#949494] ">
          <SelectedJob />
        </div>
      </div>
      <div className="h-[5%] bg-black"></div>
    </div>
  )
}
