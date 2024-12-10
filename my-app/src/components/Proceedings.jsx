import proceedingsData from '../data/proceedings.json'

function Proceedings() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Select Conference Proceedings</h1>
      <div className="space-y-8">
        {proceedingsData.conferences.concat(proceedingsData.presentations)
          .sort((a, b) => {
            const dateA = new Date(a.date.split('/').reverse().join('/'));
            const dateB = new Date(b.date.split('/').reverse().join('/'));
            return dateB - dateA;
          })
          .map((proc, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 rounded-lg p-6 ${
                proc.pdfLink ? 'cursor-pointer hover:bg-gray-700 transition-colors duration-150' : ''
              }`}
              onClick={() => {
                if (proc.pdfLink) {
                  window.open(proc.pdfLink, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <h2 className="text-xl font-semibold mb-3">{proc.title}</h2>
              <p className="text-gray-300 mb-2">
                {proc.authors.map(author => {
                  if (author.includes("Emerzian SR")) {
                    return <strong key={author}>{author}</strong>;
                  }
                  return author;
                }).reduce((prev, curr) => [prev, ", ", curr])}
              </p>
              <p className="text-gray-400">
                {proc.type} presentation at the {proc.conference}, {proc.location}, {proc.date}
              </p>
              {proc.note && (
                <p className="text-gray-500 text-sm mt-2 italic">
                  {proc.note}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Proceedings 