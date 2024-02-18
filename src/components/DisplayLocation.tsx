import { useElementVisibleStore } from '~/globalState/elementVisibleStore'

export const DisplayLocation = () => {
  const visibleElement = useElementVisibleStore((state) => state.visibleElement)

  return (
    <>
      <div className="fixed bottom-2 left-2">{visibleElement || 'None'}</div>
    </>
  )
}
