import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Education from './components/Education'
import Experience from './components/Experience'
import Publications from './components/Publications'
import Proceedings from './components/Proceedings'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home />
      case 'education':
        return <Education />
      case 'experience':
        return <Experience />
      case 'publications':
        return <Publications />
      case 'proceedings':
        return <Proceedings />
      default:
        return <Home />
    }
  }

  return (
    <div className="flex flex-row min-h-screen w-full bg-gray-900 text-gray-100 dark">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 p-8 ml-80">
        {renderPage()}
      </main>
    </div>
  )
}

export default App
