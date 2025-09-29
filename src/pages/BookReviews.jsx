import React from 'react'

const BookReviews = () => {
  const books = [
    {
      title: "Coming Soon",
      author: "Various Authors",
      rating: 0,
      review: "Book reviews will be added here soon. I'm passionate about continuous learning and love sharing insights from the books that have shaped my thinking.",
      category: "Technology",
      readDate: "TBD",
      bgColor: "from-green-500 to-teal-600"
    }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Book Reviews
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp">
            Insights and reflections from my reading journey in tech, business, and personal development
          </p>
        </div>

        <div className="space-y-8">
          {books.map((book, index) => (
            <div
              key={book.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Book Cover Placeholder */}
                <div className={`w-full lg:w-48 h-64 bg-gradient-to-br ${book.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <div className="text-white text-center p-4">
                    <div className="text-lg font-semibold mb-2">{book.title}</div>
                    <div className="text-sm opacity-80">{book.author}</div>
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{book.title}</h3>
                    <p className="text-lg text-gray-300">by {book.author}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {renderStars(book.rating)}
                    </div>
                    <span className="text-sm text-gray-500">
                      {book.rating > 0 ? `${book.rating}/5 stars` : 'Rating pending'}
                    </span>
                  </div>

                  <div className="flex gap-4 text-sm text-gray-400">
                    <span className="bg-gray-700 px-3 py-1 rounded-full">{book.category}</span>
                    <span>Read: {book.readDate}</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{book.review}</p>

                  {book.rating > 0 && (
                    <div className="pt-4">
                      <button className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                        Read full review →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reading Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-gray-400">Books Read</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-gray-400">Reviews Written</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">∞</div>
            <div className="text-gray-400">Learning Goals</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookReviews