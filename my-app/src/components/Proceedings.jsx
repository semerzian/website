import proceedingsData from '../data/proceedings.json'

function Proceedings() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Select Conference Proceedings</h1>
      <div className="space-y-8">
        {proceedingsData.conferences
          .sort((a, b) => {
            // Convert date strings to Date objects for comparison
            const [monthA, yearA] = a.date.split('/');
            const [monthB, yearB] = b.date.split('/');
            const dateA = new Date(yearA, monthA - 1);
            const dateB = new Date(yearB, monthB - 1);
            return dateB - dateA;
          })
          .map((proceeding, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 rounded-lg p-6 ${
                proceeding.pdfLink ? 'cursor-pointer hover:bg-gray-700 transition-colors duration-150' : ''
              }`}
              onClick={() => {
                if (proceeding.pdfLink) {
                  window.open(proceeding.pdfLink, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <h2 className="text-xl font-semibold mb-3">{proceeding.title}</h2>
              <p className="text-gray-300 mb-2">
                {proceeding.authors.map((author, idx) => (
                  <span key={idx}>
                    {author.includes("Emerzian SR") ? (
                      <strong>{author}</strong>
                    ) : (
                      author
                    )}
                    {idx < proceeding.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
              <p className="text-gray-400">
                {proceeding.type} presentation at the {proceeding.conference}, {proceeding.location}, {proceeding.date}
              </p>
              {proceeding.note && (
                <p className="text-gray-500 text-sm mt-2 italic">
                  {proceeding.note}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default Proceedings 