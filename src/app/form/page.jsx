import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
export default function SearchForm() {
  return (
    <div className="h-[120px]  flex flex-col text-center items-center w-[100%] bg-white justify-center text-[#2d2d2d] ">
      <form className="h-[64px]  w-[75%] xl:w-[50%] flex flex-row text-center items-center justify-start border shadow-lg  border-[#949494] rounded-[8px]">
        <div className="flex flex-row text-center w-[40%] items-center justify-center h-[100%] ">
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              width: '25px',
              marginRight: '8px',
              marginLeft: '16px',
            }}
          />
          <input
            type="text"
            placeholder="Search"
            className="  w-[100%] leading-[24px] h-[100%]  p-[8px] pr-[4px] focus:outline-none focus:border-b-2 border-black "
          />
        </div>
        <div className="h-[40%]  w-[1px] bg-slate-300 mr-[2px] ml-[2px]"></div>
        <div className="flex flex-row text-center items-center justify-center  h-[100%] w-[40%] ">
          <FontAwesomeIcon
            icon={faMapLocationDot}
            style={{
              width: '25px',
              marginRight: '8px',
              marginLeft: '16px',
            }}
          />

          <input
            type="text"
            placeholder="Search"
            className="  w-[100%] leading-[24px] h-[100%]  p-[8px] pr-[4px] focus:outline-none focus:border-b-2 border-black "
          />
        </div>
      </form>
    </div>
  )
}
