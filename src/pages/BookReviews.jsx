import React, { useState } from 'react'

const BookReviews = () => {
  const [expandedBook, setExpandedBook] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState('all')

  const genres = ['all', 'biography', 'history', 'technology', 'business', 'fiction', 'personal development']

  const books = [
    {
      title: "Chip War: The Fight for the World's Most Critical Technology",
      author: "Chris Miller",
      rating: 5,
      shortReview: "In a world run by technology, the most critical resource isn't oil or data, but the microscopic sliver of silicon that powers it all. Chris Miller's The Chip War masterfully chronicles the tumultuous history of the semiconductor, reframing this tiny piece of hardware as the central object in a high-stakes geopolitical struggle for global dominance.",
      fullReview: `The New Oil: A Riveting Account of the Battle for Global Supremacy

In a world run by technology, the most critical resource isn't oil or data, but the microscopic sliver of silicon that powers it all. Chris Miller's The Chip War masterfully chronicles the tumultuous history of the semiconductor, reframing this tiny piece of hardware as the central object in a high-stakes geopolitical struggle for global dominance. This is not just a history of technology; it is the definitive story of our modern world.

The book provides a sweeping yet accessible overview of the semiconductor industry's journey, from its inception in the labs of Texas Instruments and Fairchild Semiconductor to its current status as the linchpin of the global economy. Miller introduces a fascinating cast of characters—brilliant engineers, visionary entrepreneurs, and shrewd politicians—who drove the relentless innovation defined by Moore's Law. The narrative seamlessly connects the dots between Silicon Valley's garages, Taiwan's foundries, and the strategic planning rooms of Washington and Beijing.

**Strengths**

**Exceptional Narrative Storytelling:** Miller possesses a rare talent for transforming a potentially dense and technical subject into a gripping, page-turning thriller. He explains complex concepts like lithography and transistor gates with remarkable clarity, ensuring readers of all backgrounds can follow along.

**Geopolitical Insight:** The book's greatest strength lies in its sharp analysis of how semiconductor manufacturing became a weapon in international relations. It brilliantly explains why Taiwan's TSMC is arguably the most important company in the world and why the US and China are locked in a battle for technological supremacy.

**Comprehensive Scope:** From the Cold War space race to modern corporate espionage and trade wars, the book covers decades of history across multiple continents without ever feeling rushed or superficial.

**Weaknesses**

**A Densely Packed Narrative:** While a strength, the sheer amount of information, companies, and individuals covered can occasionally feel overwhelming for a casual reader.

**US-Centric Perspective:** The story is primarily told through the lens of American innovation and its competition with rivals (first Japan, now China). While other key players like the Netherlands (ASML) and South Korea (Samsung) are featured, a deeper dive into their unique industrial strategies would have been welcome.

**Themes and Deeper Analysis**

The Chip War argues compellingly that military, economic, and political power in the 21st century is inextricably linked to control over the most advanced microchips. Miller explores the theme of hyper-specialized globalization, showing how an incredibly complex and vulnerable supply chain was built, and how nations are now scrambling to unwind this interdependence in the name of national security. It is a profound exploration of how innovation, capital, and politics collide to shape the fate of nations.

**Target Audience**

This book is essential reading for anyone interested in technology, modern history, international relations, or economics. Its accessible style makes it perfect for the curious layperson, while its depth and research will satisfy academics and policy experts.

**Rating and Recommendation**

Rating: ★★★★★ (5/5)

An absolute must-read. The Chip War is a landmark work of economic and technological history that will fundamentally change how you see the world, the smartphone in your pocket, and the global power struggles reported in the news every day.

**Comparable Titles**

If you enjoyed The Chip War, you might also like:
- The Prize: The Epic Quest for Oil, Money, and Power by Daniel Yergin
- AI Superpowers: China, Silicon Valley, and the New World Order by Kai-Fu Lee
- Flash Boys: A Wall Street Revolt by Michael Lewis`,
      categories: ["Technology", "History"],
      readDate: "2025",
      coverImage: "/images/books/Chip_War_Cover.jpg"
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

  const renderReviewText = (text) => {
    // Split text by ** for bold formatting
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Remove ** and render as bold
        return <strong key={index} className="font-bold text-white">{part.slice(2, -2)}</strong>
      }
      return <React.Fragment key={index}>{part}</React.Fragment>
    })
  }

  const filteredBooks = selectedGenre === 'all'
    ? books
    : books.filter(book =>
        book.categories?.some(cat => cat.toLowerCase() === selectedGenre.toLowerCase())
      )

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

        {/* Genre Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-6 py-2 rounded-full capitalize text-sm font-medium transition-all duration-300 ${
                selectedGenre === genre
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredBooks.map((book, index) => {
            const isExpanded = expandedBook === index
            return (
              <div
                key={book.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 animate-fadeInUp cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setExpandedBook(isExpanded ? null : index)}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Book Cover */}
                  <div className="w-full lg:w-48 h-64 flex-shrink-0">
                    {book.coverImage ? (
                      <img
                        src={book.coverImage}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${book.bgColor} rounded-lg flex items-center justify-center`}>
                        <div className="text-white text-center p-4">
                          <div className="text-lg font-semibold mb-2">{book.title}</div>
                          <div className="text-sm opacity-80">{book.author}</div>
                        </div>
                      </div>
                    )}
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

                    <div className="flex gap-2 text-sm text-gray-400 flex-wrap">
                      {book.categories ? (
                        book.categories.map(cat => (
                          <span key={cat} className="bg-gray-700 px-3 py-1 rounded-full">{cat}</span>
                        ))
                      ) : (
                        <span className="bg-gray-700 px-3 py-1 rounded-full">{book.category}</span>
                      )}
                      <span className="px-3 py-1">Read: {book.readDate}</span>
                    </div>

                    {/* Short review or full review */}
                    {isExpanded && book.fullReview ? (
                      <div className="text-gray-300 leading-relaxed whitespace-pre-line prose prose-invert max-w-none">
                        {renderReviewText(book.fullReview)}
                      </div>
                    ) : (
                      <p className="text-gray-300 leading-relaxed">
                        {renderReviewText(book.shortReview || book.review)}
                      </p>
                    )}

                    {/* Expand/Collapse button */}
                    {book.fullReview && (
                      <div className="pt-4">
                        <button
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"
                          onClick={(e) => {
                            e.stopPropagation()
                            setExpandedBook(isExpanded ? null : index)
                          }}
                        >
                          {isExpanded ? '← Show less' : 'Read full review →'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Reading Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">{filteredBooks.length}</div>
            <div className="text-gray-400">{selectedGenre === 'all' ? 'Books Read' : 'Books in Genre'}</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700">
            <div className="text-3xl font-bold text-white mb-2">{filteredBooks.filter(b => b.rating > 0).length}</div>
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