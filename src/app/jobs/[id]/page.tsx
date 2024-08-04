import SelectedJob from './SelectedJob'
import JobsList from './jobsList'

export default function JobsPage({ params }: { params: { id: string } }) {
  // console.log('params', params)
  let data = params?.id
  return (
    <div className="h-auto bg-white  ">
      <div className="h-auto flex flex-row text-center items-start justify-center gap-[25px] ">
        <div className="w-[25%] h-auto pb-[2rem] ">
          <JobsList />
        </div>
        <div className="w-[30%] h-[98vh] border border-[#949494] sticky top-2 ">
          <SelectedJob data={data} />
        </div>
      </div>
      <div className="h-[26px] bg-black"></div>
    </div>
  )
}
