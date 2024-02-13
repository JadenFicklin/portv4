import { WorkArray } from '~/data/work'
import { Project } from '~/utils/Project'

export const Works = () => {
  return (
    <>
      <div className="flex flex-wrap w-9/12 gap-32 mx-auto h-max">
        <Project data={WorkArray[0]} orientation="left" className="mt-32" />
        <Project data={WorkArray[1]} orientation="right" />
        <Project data={WorkArray[2]} orientation="left" />
      </div>
    </>
  )
}
