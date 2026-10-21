
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import AddCompetitorModal from '../components/AddCompetitorModal'
import '../App.css'

const demoTrends = [
  { name: '#SustainableFashion', platform: 'Instagram', growth: '+24%' },
  { name: '#StreetStyle', platform: 'TikTok', growth: '+18%' },
  { name: '#WorkoutMotivation', platform: 'YouTube', growth: '+12%' },
  { name: '#NewCollection', platform: 'Instagram', growth: '+8%' },
  { name: '#MinimalLook', platform: 'Instagram', growth: '+6%' }
]

const demoPosts = [
  { brand: 'Fashion Brand', platform: 'Instagram', topic: 'New arrivals' },
  { brand: 'Sports Brand', platform: 'YouTube', topic: 'Fitness collection' },
  { brand: 'Lifestyle Brand', platform: 'TikTok', topic: 'Everyday styling' }
]

function Dashboard() {
  const navigate = useNavigate()

  const [competitors, setCompetitors] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [showModal, setShowModal] = useState(false)

const handleAddCompetitor = async (data) => {
  try {
    const response = await fetch('http://localhost:8080/api/competitors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        category: data.category,
        platform: data.platform,
        username: data.handle
      })
    })

    if (!response.ok) throw new Error('Save failed')

    const saved = await response.json()
    setCompetitors((prev) => [...prev, saved])
    setShowModal(false)
  } catch (error) {
    alert('Could not add competitor')
  }
}

  useEffect(() => {
    fetch('http://localhost:8080/api/competitors')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load competitors')
        }
        return response.json()
      })
      .then((data) => {
        setCompetitors(Array.isArray(data) ? data : [])
      })
      .catch(() => {
        setError('Cannot connect to Spring Boot. Check the backend.')
      })
      .finally(() => setLoading(false))
  }, [])

 
const filteredCompetitors = competitors.filter((brand) => {
  const search = searchTerm.trim().toLowerCase()

  return (
    (brand.name || '').toLowerCase().includes(search) ||
    (brand.platform || '').toLowerCase().includes(search) ||
    (brand.category || '').toLowerCase().includes(search) ||
    (brand.username || '').toLowerCase().includes(search)
  )
})


  const handleDelete = async (brand) => {
    if (!window.confirm(`Delete ${brand.name}?`)) return

    try {
      const response = await fetch(
        `http://localhost:8080/api/competitors/${brand.id}`,
        { method: 'DELETE' }
      )

      if (!response.ok) {
        throw new Error('Delete failed')
      }

      setCompetitors((previous) =>
        previous.filter((item) => item.id !== brand.id)
      )
    } catch (err) {
      alert('Could not delete competitor. Please try again.')
    }
  }

  
const stats = [
  {
    title: 'Total Competitors',
    value: loading ? '...' : error ? '—' : competitors.length,
    icon: '◎',
    detail: 'Saved in MySQL'
  },
  {
    title: 'Tracked Posts',
    value: 'Soon',
    icon: '▤',
    detail: 'Social media integration planned'
  },
  {
    title: 'Trending Topics',
    value: demoTrends.length,
    icon: '#',
    detail: 'Sample topics'
  },
  {
    title: 'Campaigns',
    value: 'Soon',
    icon: '◈',
    detail: 'Campaign management planned'
  }
]


  return (
    <div className="app">
      <Sidebar />

      <main className="main ml-dashboard">

        <div className="ml-topbar">
          <div className="ml-search">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Search competitors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="ml-profile">
            <span className="ml-profile-avatar">A</span>
          <strong>Angel</strong>
          </div>
        </div>

        <section className="ml-welcome">
          <h1>Welcome to Market Lens</h1>
          <p>
            Keep track of your competitors and explore
            social media marketing trends.
          </p>
        </section>

        <section className="ml-stats">
          {stats.map((stat) => (
            <div className="ml-stat" key={stat.title}>
              <div className="ml-stat-icon">{stat.icon}</div>
              <div>
                <p>{stat.title}</p>
                <h2>{stat.value}</h2>
                <small>{stat.detail}</small>
              </div>
            </div>
          ))}
        </section>

        <section className="ml-content-grid">

          <div className="ml-panel ml-competitor-panel">
            <div className="ml-panel-header">
              <div>
                <h2>Competitor Management</h2>
                <p>Manage your saved competitor accounts</p>
              </div>

              <button
                className="ml-primary-button"
            onClick={() => setShowModal(true)}
              >
                + Add Competitor
              </button>
            </div>

            {error && <p className="ml-error">{error}</p>}
{searchTerm.trim() && (
  <p className="ml-search-result">
    {filteredCompetitors.length} competitor(s) found
  </p>
)}
            <div className="ml-table-wrapper">
              <table className="ml-table">
                <thead>
                  <tr>
                    <th>Brand Name</th>
                    <th>Platform</th>
                    <th>Category</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredCompetitors.slice(0, 5).map((brand) => (
                    <tr key={brand.id}>
                      <td>
                        <div className="ml-brand-name">
                          <span className="ml-brand-avatar">
                            {(brand.name || '?')
                              .slice(0, 1)
                              .toUpperCase()}
                          </span>
                          <span>{brand.name}</span>
                        </div>
                      </td>

                      <td>{brand.platform || '—'}</td>
                      <td>{brand.category || '—'}</td>

                      <td>
                        <div className="ml-actions">
                          <button
                            title="View competitor"
                            onClick={() => navigate('/competitors')}
                          >
                            View
                          </button>

                          <button
                            title="Delete competitor"
                            className="ml-delete"
                            onClick={() => handleDelete(brand)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {loading && <p className="ml-empty">Loading competitors...</p>}

            {!loading && !error && filteredCompetitors.length === 0 && (
              <p className="ml-empty">No competitors found.</p>
            )}

            <button
              className="ml-text-button"
              onClick={() => navigate('/competitors')}
            >
              View all competitors →
            </button>
          </div>

          <div className="ml-panel ml-trends-panel">
            <div className="ml-panel-header">
              <div>
                <h2>Trending Topics</h2>
                <p>Sample data · API integration pending</p>
              </div>
            </div>

            <div className="ml-trend-list">
              {demoTrends.map((trend, index) => (
                <div className="ml-trend-row" key={trend.name}>
                  <span className="ml-trend-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="ml-trend-info">
                    <strong>{trend.name}</strong>
                    <small>{trend.platform}</small>
                  </div>

                  <span className="ml-trend-growth">
                    {trend.growth}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="ml-text-button"
              onClick={() => navigate('/trends')}
            >
              Explore trends →
            </button>
          </div>
        </section>

        <section className="ml-panel ml-posts-panel">
          <div className="ml-panel-header">
            <div>
              <h2>Recent Posts from Competitors</h2>
              <p>
                Interface preview · Live post retrieval is planned
              </p>
            </div>
          </div>

          <div className="ml-post-grid">
            {demoPosts.map((post) => (
              <div className="ml-post" key={post.brand}>
                <div className="ml-post-placeholder">
                  <span>{post.platform}</span>
                  <strong>{post.topic}</strong>
                </div>

                <div className="ml-post-info">
                  <strong>{post.brand}</strong>
                  <p>Sample content preview</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {showModal && (
  <AddCompetitorModal
    onClose={() => setShowModal(false)}
    onAdd={handleAddCompetitor}
    initialData={null}
  />
)}

      </main>
    </div>
  )
}

export default Dashboard
