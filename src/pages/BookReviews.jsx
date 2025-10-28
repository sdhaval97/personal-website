import React, { useState } from 'react'

const BookReviews = () => {
  const [expandedBook, setExpandedBook] = useState(null)
  const [selectedGenre, setSelectedGenre] = useState('all')

  const genres = ['all', 'biography', 'history', 'technology', 'business', 'fiction', 'philosophy', 'personal development']

  const books = [
    {
      title: "The Obstacle Is the Way",
      author: "Ryan Holiday",
      rating: 3,
      shortReview: "Ryan Holiday's The Obstacle Is the Way isn't just a book; it's a manual for reframing every challenge you'll ever face. It takes a philosophy from antiquity and sharpens it into a practical, modern tool for thriving not in spite of adversity, but because of it.",
      fullReview: `Turning Trials into Triumphs

Ryan Holiday's The Obstacle Is the Way isn't just a book; it's a manual for reframing every challenge you'll ever face. It takes a philosophy from antiquity and sharpens it into a practical, modern tool for thriving not in spite of adversity, but because of it.

Based on the timeless wisdom of Stoicism, the book presents a simple yet profound framework for navigating life's difficulties. Holiday introduces this framework through a three-part structure: Perception, Action, and Will. He argues that our problems don't come from external events, but from our perception of them. By learning to control our perceptions, take deliberate action, and cultivate an unshakeable inner will, we can turn any obstacle upside down and use it as a stepping stone.

**Strengths**

What makes this book effective is its relentless practicality. Holiday isn't interested in abstract philosophical debates; he's focused on application.

**Accessible Prose:** He masterfully distills complex Stoic concepts (drawn from giants like Marcus Aurelius, Seneca, and Epictetus) into clear, concise, and actionable advice.

**Compelling Examples:** The book is packed with fascinating historical and contemporary stories—from John D. Rockefeller and Amelia Earhart to Steve Jobs and Ulysses S. Grant. These examples show the book's principles in action.

**Motivational Structure:** The "Perception, Action, Will" framework is empowering. It provides a clear path forward when you feel stuck, frustrated, or overwhelmed, moving you from a state of passive suffering to one of active engagement.

**Weaknesses**

While the message is potent, its delivery can fall short for some readers.

**Repetitive Nature:** The core message—"what stands in the way becomes the way"—is repeated extensively. While this reinforces the concept, many readers will find it redundant and feel the book could have been a much shorter essay.

**Philosophical Depth:** This is not a deep, academic dive into Stoic philosophy. Readers looking for a comprehensive study of Stoicism will find it simplistic and introductory.

**Who Might Not Enjoy It:** If you're looking for a book that offers sympathy or validates feelings of frustration, this isn't it. Its tough-minded pragmatism can feel blunt or dismissive of genuine emotional struggle.

**Themes and Deeper Analysis**

The central theme is reframing. The book is a masterclass in cognitive reframing, teaching you to see the "bad" things that happen as opportunities. Is your project failing? It's a chance to learn, pivot, and innovate. Did someone betray you? It's a lesson in resilience and character. Holiday argues that we don't control what happens to us, but we always control how we respond. This shift from a victim mindset to an empowered one is the book's greatest takeaway.

**Target Audience**

This book is best for newcomers to Stoicism or readers seeking a quick, motivational boost. Entrepreneurs, leaders, and athletes might find its pragmatic approach useful, but only if they are new to these concepts.

**Rating and Recommendation**

Rating: ★★★☆☆ (3/5)

The Obstacle Is the Way is a valuable introduction to a powerful mindset. It succeeds in making Stoicism accessible to a modern audience. However, its repetitive nature and lack of depth keep it from being a truly great book. It's worth a read if you are completely new to the topic, but seasoned readers of philosophy or self-help may find it too basic.

**Comparable Titles**

- Meditations by Marcus Aurelius
- Man's Search for Meaning by Viktor Frankl
- Grit: The Power of Passion and Perseverance by Angela Duckworth`,
      categories: ["Philosophy", "Personal Development"],
      readDate: "2021",
      coverImage: "/images/books/Obstacle_Is_The_Way_Cover.jpg"
    },
    {
      title: "Ego is the Enemy",
      author: "Ryan Holiday",
      rating: 5,
      shortReview: "Ryan Holiday's Ego is the Enemy is not just a book; it's a vital, timeless intervention for anyone striving for meaning and success. This masterfully crafted work argues that our biggest obstacle isn't the external world, but our own internal sense of self-importance.",
      fullReview: `The Quiet Truth That Unlocks Greatness

Ryan Holiday's Ego is the Enemy is not just a book; it's a vital, timeless intervention for anyone striving for meaning and success. This masterfully crafted work argues that our biggest obstacle isn't the external world, but our own internal sense of self-importance. Through a compelling tapestry of historical anecdotes and Stoic wisdom, Holiday methodically dismantles the myth that ego is a necessary fuel for ambition.

**What Makes It Essential Reading**

The book's primary strength lies in its clarity and structure. Holiday divides his argument into three logical parts—Aspire, Success, and Failure—showing how ego sabotages us at every stage of our journey. The prose is sharp, direct, and devoid of fluff, making profound philosophical concepts accessible and actionable.

Instead of abstract preaching, Holiday uses powerful, real-world examples to illustrate his points. We learn from the humility of military leaders like George Marshall, the self-destructive pride of historical figures, and the disciplined focus of countless others who chose purpose over praise. This narrative approach makes the lessons stick, transforming the concept of "ego" from a vague idea into a tangible force we can identify and manage in our own lives. It's a book that doesn't just tell you what to do, but shows you why through the successes and failures of others.

**Who Might Not Connect**

While it's hard to find a genuine weakness in this book, readers looking for a quick-fix, step-by-step self-help guide might find its philosophical depth more demanding. Holiday offers wisdom and a framework for thinking, not a simple checklist. The power of the book comes from reflection and consistent application, which requires more effort than a typical "life hack" manual.

**Themes and Deeper Analysis**

The central theme is the fundamental conflict between ego and humility. Holiday posits that true confidence is quiet and demonstrated through work, whereas ego is loud, fragile, and requires constant validation. The book is a modern masterclass in Stoic philosophy, championing principles like self-awareness, rationality, and the importance of being a perpetual student. It forces you to ask uncomfortable but necessary questions about your motivations: Are you doing the work, or are you just trying to be seen doing the work?

**Who Should Read This Book?**

This book is essential reading for leaders, entrepreneurs, artists, athletes, and anyone ambitious. It's for the person just starting out, the one who has achieved success, and the one who has just faced a crushing failure. If you are interested in personal development, leadership, or philosophy, Ego is the Enemy should be at the top of your list.

**Rating and Recommendation**

Rating: ★★★★★ (5/5)

Ego is the Enemy is a profound and practical guide to achieving a more meaningful and sustainable form of success. It's a book to be read, re-read, and absorbed. I wholeheartedly recommend it as a foundational text for anyone serious about personal and professional growth.

**If You Liked This, You'll Also Enjoy...**

- The Obstacle Is the Way by Ryan Holiday
- Meditations by Marcus Aurelius
- Man's Search for Meaning by Viktor E. Frankl`,
      categories: ["Philosophy", "Personal Development"],
      readDate: "2021",
      coverImage: "/images/books/Ego_Is_The_Enemy_Cover.jpg"
    },
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