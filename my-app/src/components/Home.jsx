import profileData from '../data/profile.json'

function Home() {
  return (
    <div className="max-w-4xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mb-8">
        <img
          src={profileData.profileImage}
          alt={profileData.name}
          className="w-48 md:w-64 rounded-lg shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">{profileData.name}</h1>
          <p className="text-xl text-gray-300 mb-2">{profileData.currentPosition.title}</p>
          <p className="text-gray-400">{profileData.currentPosition.department}</p>
          <p className="text-gray-400">{profileData.currentPosition.institution}</p>
          <p className="text-gray-400">{profileData.location}</p>
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