import experienceData from '../data/experience.json'

function Experience() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
      
      <div className="space-y-8 mb-12">
        {experienceData.positions.map((position, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{position.title}</h2>
                <p className="text-gray-300">{position.department}</p>
                <p className="text-gray-300">{position.institution}</p>
                <p className="text-gray-400 mb-4">{position.period}</p>
              </div>
              {position.logo && (
                <img 
                  src={position.logo}
                  alt={`${position.institution} logo`}
                  className="w-24 h-24 object-contain"
                />
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6">Teaching Experience</h2>
      <div className="space-y-6">
        {experienceData.teaching.map((teaching, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2">{teaching.role}</h3>
                <p className="text-gray-300">{teaching.course}</p>
                <p className="text-gray-300">{teaching.institution}</p>
                <p className="text-gray-400">{teaching.period}</p>
              </div>
              {teaching.logo && (
                <img 
                  src={teaching.logo}
                  alt={`${teaching.institution} logo`}
                  className="w-24 h-24 object-contain"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience 