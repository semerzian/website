import publicationsData from '../data/publications.json'

function Publications() {
  const formatAuthors = (authors) => {
    return authors.map((author, index) => {
      const formattedAuthor = author.includes("Emerzian SR") ? 
        author.replace("Emerzian SR", "<strong>Emerzian SR</strong>") : 
        author;
      
      return index === authors.length - 1 ? 
        formattedAuthor : 
        formattedAuthor + ", ";
    }).join("");
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Peer-Reviewed Publications</h1>
      <div className="space-y-6">
        {publicationsData.peerReviewed.map((pub, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">{pub.title}</h2>
            <p 
              className="text-gray-300 mb-2"
              dangerouslySetInnerHTML={{ 
                __html: formatAuthors(pub.authors)
              }}
            />
            <p className="text-gray-400">
              {pub.journal}
              {pub.volume && `, ${pub.volume}`}
              {pub.pages && `, ${pub.pages}`}
              {`. ${pub.year}`}
            </p>
            {pub.note && (
              <p className="text-gray-500 text-sm mt-2 italic">
                {pub.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Publications 