import { useState } from 'react'
import profileData from '../data/profile.json'
import { FaXTwitter, FaLinkedin } from 'react-icons/fa6'

function Sidebar({ currentPage, setCurrentPage }) {
  const [profile] = useState(profileData)

  const menuItems = [
    { id: 'home', label: 'Info' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Professional Experience' },
    { id: 'publications', label: 'Peer-Reviewed Publications' },
    { id: 'proceedings', label: 'Conference Proceedings' }
  ]

  return (
    <aside className="w-full md:fixed md:left-0 md:top-0 md:w-80 md:h-screen bg-gray-950 shadow-xl overflow-y-auto flex items-center">
      <div className="w-full px-4 py-4 md:px-6 md:py-0">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full text-left px-4 py-3 transition-all duration-150 border-b-2 ${
                currentPage === item.id 
                  ? 'text-white font-medium border-cyan-400' 
                  : 'text-gray-300 border-transparent hover:text-white hover:border-cyan-400/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-700/50">
          <a 
            href={`mailto:${profile.email}`}
            className="text-gray-400 text-sm text-center mb-4 block hover:text-white transition-colors"
          >
            {profile.email}
          </a>
          <div className="flex justify-center space-x-4">
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar 