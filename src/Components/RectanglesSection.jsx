import { useNavigate } from 'react-router-dom'

function RectanglesSection() {
  const navigate = useNavigate()
  const rectangles = [
    { id: 1, subtitle: "Subtitle 1", text: "Text area 1", path: "/page1" },
    { id: 2, subtitle: "Subtitle 2", text: "Text area 2", path: "/page2" },
    { id: 3, subtitle: "Subtitle 3", text: "Text area 3", path: "/page3" }
  ]

  return (
    <div className="flex justify-center gap-6 px-10 py-16 bg-white">
      {rectangles.map(rect => (
        <div
          key={rect.id}
          onClick={() => navigate(rect.path)}
          className="cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-6 rounded-lg shadow-md w-1/4 text-center"
        >
          <h3 className="text-xl font-semibold mb-2">{rect.subtitle}</h3>
          <p className="text-sm text-gray-600">{rect.text}</p>
        </div>
      ))}
    </div>
  )
}

export default RectanglesSection