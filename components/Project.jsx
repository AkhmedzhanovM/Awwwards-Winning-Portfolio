"use client"

const Project = ({index, h1, h2, setModal}) => {
  return (
    <div className="flex flex-col justify-center items-center my-80" onMouseEnter={() => {setModal({active: true, index: index})}} onMouseLeave={() => {setModal({active: false, index: index})}}>
      <h1 className="text-[#e9dfce] text-[100px] font-grandslang">
        {h1}
      </h1>
      <h2 className="text-white text-[15px] font-degular">
        {h2}
      </h2>
    </div>
  )
}

export default Project
