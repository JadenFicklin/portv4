import { WorkArray } from '~/data/work'
import { Project } from '~/utils/Project'

export const Works = () => {
  return (
    <>
      <div className="w-full h-max">
        <Project data={WorkArray[0]} orientation="left" />
        <Project data={WorkArray[1]} orientation="right" />
        <Project data={WorkArray[2]} orientation="left" />
      </div>
    </>
  )
}
