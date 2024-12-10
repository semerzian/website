import educationData from '../data/education.json'

function Education() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <div className="space-y-8">
        {educationData.degrees.map((degree, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{degree.degree}</h2>
                <p className="text-gray-300">{degree.institution}</p>
                <p className="text-gray-400">{degree.location}</p>
                <p className="text-gray-400">{degree.year}</p>
                {degree.thesis && (
                  <p className="text-gray-300 mt-4">
                    <span className="font-medium">Thesis:</span> {degree.thesis}
                  </p>
                )}
                {degree.advisor && (
                  <p className="text-gray-300">
                    <span className="font-medium">Advisor:</span> {degree.advisor}
                  </p>
                )}
              </div>
              {degree.logo && (
                <img 
                  src={degree.logo} 
                  alt={`${degree.institution} logo`}
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

export default Education 