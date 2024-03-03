import { useEffect, useState } from 'react'
import { ExperienceArray } from '~/data/experience'
import { cn } from '~/utils/cn'

export const MyExperienceText = () => {
  const [percentages, setPercentages] = useState<number[]>([])
  const [hoveredItem, setHoveredItem] = useState('Devmountain')

  const getJobPercentages = () => {
    const totalMonths = ExperienceArray.reduce(
      (acc, cur) => acc + cur.months,
      0,
    )
    const jobPercentages = ExperienceArray.map((job) =>
      Math.round((job.months / totalMonths) * 100),
    )
    setPercentages(jobPercentages)
  }

  useEffect(() => {
    getJobPercentages()
  }, [])

  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-green-500',
    'bg-yellow-500',
  ]

  return (
    <>
      <div className="max-w-[600px]">
        <div className="flex flex-wrap w-full h-2">
          {percentages.map((percentage, index) => (
            <div
              key={index}
              style={{ width: `${percentage}%` }}
              className={cn(
                `h-full ${colors[index % colors.length]} duration-200`,
                hoveredItem === ExperienceArray[index].name &&
                  'bg-orange-500 cursor-pointer',
              )}
              onMouseEnter={() => setHoveredItem(ExperienceArray[index].name)}
            ></div>
          ))}
        </div>

        {ExperienceArray.map(
          (item) =>
            hoveredItem === item.name && (
              <div key={item.name}>
                <div>Company Name: {item.name}</div>
                <div>Timeframe: {item.timeframe}</div>
                <div>Position: {item.position}</div>
                <div>Responsibilities: {item.description}</div>
                <div>
                  technologies:{' '}
                  {item.technologies.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ),
        )}
      </div>
    </>
  )
}
