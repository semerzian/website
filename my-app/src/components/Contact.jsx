import profileData from '../data/profile.json'

function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Information</h1>
      <div className="bg-gray-800 rounded-lg p-8">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-300">{profileData.email}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Office</h2>
            <p className="text-gray-300">{profileData.department}</p>
            <p className="text-gray-300">{profileData.institution}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 