import experienceData from '../data/experience.json'

function Experience() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
      
      {/* Research Positions */}
      <div className="space-y-8 mb-12">
        {experienceData.positions.map((position, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{position.title}</h2>
            <p className="text-gray-300">{position.department}</p>
            <p className="text-gray-300">{position.institution}</p>
            <p className="text-gray-400 mb-4">{position.period}</p>
            
          </div>
        ))}
      </div>

      {/* Teaching Experience */}
      <h2 className="text-2xl font-bold mb-6">Teaching Experience</h2>
      <div className="space-y-6">
        {experienceData.teaching.map((teaching, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">{teaching.role}</h3>
            <p className="text-gray-300">{teaching.course}</p>
            <p className="text-gray-300">{teaching.institution}</p>
            <p className="text-gray-400">{teaching.period}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience 