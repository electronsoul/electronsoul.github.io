import { useState } from "react";
import ProjectDetails from "./ProjectDetails"

const Project = ({ title, description, subDescription, href, image, tags }) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div className="flex-wrap items-center py-10 justify-between
      space-y-14 sm:flex sm:space-y-0"> 
        <div>
          <p className="text-2xl"> {title} </p>
          <div className="flex gap-5 mt-2 text-sand"> 
          {tags.map((tag) => (
            <span key={tag.id}>{tag.name}</span>
          ))}
          </div>
        </div>
        <button onClick={() =>setIsHidden(true)}
        className="flex items-center gap-1 cursor-pointer hover-animation">
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="h-[1px] w-full bg-gradient-to-r via-neutral-800
      from-transparent to-transparent"/>
      {isHidden && (<ProjectDetails 
        title={title}
        description={description}
        subDescription={subDescription}
        image={image}
        tags={tags}
        href={href}
        closeModal={() => setIsHidden(false)}
      />)}
    </>
  )
}

export default Project