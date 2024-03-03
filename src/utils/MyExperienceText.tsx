import { useEffect, useState } from 'react'
import { ExperienceArray } from '~/data/experience'

export const MyExperienceText = () => {
  const [percentages, setPercentages] = useState<number[]>([])

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
        {ExperienceArray.map((item, index) => (
          <div key={item.name}>
            {item.name} - {item.months} months ({percentages[index]}%)
          </div>
        ))}
        <div className="flex flex-wrap w-full h-5 bg-blue-500">
          {percentages.map((percentage, index) => (
            <div
              key={index}
              style={{ width: `${percentage}%` }}
              className={`h-5 ${colors[index % colors.length]}`}
            >
              {percentage}%
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
