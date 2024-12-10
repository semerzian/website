function Proceedings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Conference Proceedings</h1>
      <div className="space-y-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Novel Approaches to Neural Network Architecture</h2>
          <p className="text-gray-300">International Conference on Machine Learning (ICML)</p>
          <p className="text-gray-400">2023</p>
          <p className="text-gray-300 mt-2">Presented in Montreal, Canada</p>
        </div>
        {/* Add more proceedings as needed */}
      </div>
    </div>
  )
}

export default Proceedings 