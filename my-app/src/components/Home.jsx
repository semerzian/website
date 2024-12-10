import profileData from '../data/profile.json'

function Home() {
  return (
    <div className="max-w-4xl">
      <div className="flex items-start gap-8 mb-8">
        <img
          src="./images/Shannon R Emerzian 20231101_04.jpg"
          alt={profileData.name}
          className="w-64 rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">{profileData.name}</h1>
          <p className="text-xl text-gray-300 mb-2">{profileData.currentPosition.title}</p>
          <p className="text-gray-400">{profileData.currentPosition.department}</p>
          <p className="text-gray-400">{profileData.currentPosition.institution}</p>
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg p-8 mb-8">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-3">Research Interests</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {profileData.specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 