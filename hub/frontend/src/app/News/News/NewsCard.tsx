interface Article {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publication: string;
  publishedAt: string;
  readTime: string;
  image: string;
  tags: string[];
  likes: number;
  shares: number;
}

interface NewsCardProps {
  article: Article;
  formatTimeAgo: (timestamp: string) => string;
}

export default function NewsCard({ article, formatTimeAgo }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            article.category === 'technology' ? 'bg-purple-100 text-purple-800' :
            article.category === 'market' ? 'bg-green-100 text-green-800' :
            article.category === 'government' ? 'bg-blue-100 text-blue-800' :
            article.category === 'weather' ? 'bg-orange-100 text-orange-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </span>
          <span className="text-3xl">{article.image}</span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
        
        <div className="flex items-center text-xs text-gray-500 mb-4">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.publication}</span>
          <span className="mx-2">•</span>
          <span>{formatTimeAgo(article.publishedAt)}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{article.readTime}</span>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              ❤️ {article.likes}
            </span>
            <span className="flex items-center">
              📤 {article.shares}
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {article.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Read Full Article
        </button>
      </div>
    </div>
  );
}
