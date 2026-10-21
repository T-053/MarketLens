import { useState, useEffect } from 'react'
import '../App.css'
import Sidebar from '../components/Sidebar'
import AddCompetitorModal from '../components/AddCompetitorModal'

function Competitors() {
    const [showModal, setShowModal] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [editingCompetitor, setEditingCompetitor] = useState(null)
    const [openMenu, setOpenMenu] = useState(null)
    const [selectedCompetitor, setSelectedCompetitor] = useState(null)
     
    useEffect(() => {
  fetch('http://localhost:8080/api/competitors')
    .then((response) => response.json())
   .then((data) => {
  setCompetitors(data.map((brand) => ({
    ...brand,
    handle: brand.username,
    initials: brand.name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2),
    followers: '—',
    engagement: '—',
    posts: '—',
    trend: '—'
  })))
})
    .catch((error) => {
      console.error('Error fetching competitors:', error)
    })
}, [])

    const [competitors, setCompetitors] = useState([
    {
      name: 'Urban Thread',
      category: 'Fashion & Lifestyle',
      initials: 'UT',
      followers: '820K',
      engagement: '5.8%',
      posts: '28',
      trend: '+12%',
    },
    {
      name: 'Nova Active',
      category: 'Sports & Activewear',
      initials: 'NA',
      followers: '640K',
      engagement: '6.7%',
      posts: '22',
      trend: '+18%',
    },
    {
      name: 'North & Co.',
      category: 'Lifestyle Brand',
      initials: 'NC',
      followers: '410K',
      engagement: '4.9%',
      posts: '19',
      trend: '+7%',
    },
    {
      name: 'Mellow Studio',
      category: 'Minimal Fashion',
      initials: 'MS',
      followers: '295K',
      engagement: '7.2%',
      posts: '16',
      trend: '+21%',
    },
  ])

  
const handleAddCompetitor = async (data) => {
  try {
    const response = await fetch('http://localhost:8080/api/competitors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        category: data.category,
        platform: data.platform,
        username: data.handle
      })
    })

    if (!response.ok) {
      throw new Error('Failed to save competitor')
    }

    const savedBrand = await response.json()

    const newCompetitor = {
      ...savedBrand,
      handle: savedBrand.username,
      initials: savedBrand.name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2),
      followers: '—',
      engagement: '—',
      posts: '—',
      trend: '—'
    }

    setCompetitors((previousCompetitors) => [
      ...previousCompetitors,
      newCompetitor
    ])

  } catch (error) {
    console.error('Error adding competitor:', error)
    alert('Could not save competitor. Please try again.')
  }
}


const filteredCompetitors = competitors.filter((brand) =>
  brand.name.toLowerCase().includes(searchTerm.toLowerCase())
)

const handleDeleteCompetitor = async (name) => {
  const shouldDelete = window.confirm(
    `Are you sure you want to delete ${name}?`
  )

  if (!shouldDelete) return

  const brand = competitors.find((item) => item.name === name)

  if (!brand || !brand.id) {
    alert('Competitor ID not found')
    return
  }

  try {
    const response = await fetch(
      `http://localhost:8080/api/competitors/${brand.id}`,
      { method: 'DELETE' }
    )

    if (!response.ok) {
      throw new Error('Failed to delete competitor')
    }

    setCompetitors((previousCompetitors) =>
      previousCompetitors.filter((item) => item.id !== brand.id)
    )
  } catch (error) {
    console.error('Error deleting competitor:', error)
    alert('Could not delete competitor')
  }
}


const handleEditCompetitor = (updatedData) => {
  setCompetitors((previousCompetitors) =>
    previousCompetitors.map((brand) =>
      brand.name === editingCompetitor.name
        ? {
            ...brand,
            ...updatedData,
            initials: updatedData.name
              .split(' ')
              .map((word) => word[0])
              .join('')
              .toUpperCase()
              .slice(0, 2),
          }
        : brand
    )
  )

  setEditingCompetitor(null)
}

  return (
    <div className="app">

      <Sidebar />

      <main className="main competitorsPage">

        <header className="competitorsHeader">
          <div>
            <p className="eyebrow">COMPETITOR RADAR</p>
            <h1>Brands on your radar</h1>
            <p className="subtitle">
              Keep an eye on the brands shaping your market.
            </p>
          </div>

          <button className="addCompetitor"
                  onClick={() => setShowModal(true)}
            >
            + Add competitor
          </button>
        </header>

        <div className="competitorToolbar">
          <div className="competitorSearch">
           <span>⌕</span>

             <input
               type="text"
               placeholder="Search your tracked brands..."
               value={searchTerm}
               onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
         
          <div className="competitorCount">
         <strong>{competitors.length}</strong> brands tracked
          </div>
        </div>

        <section className="competitorGrid">

         {filteredCompetitors.map((brand) => (
            <div className="competitorCard" key={brand.name}>

              <div className="brandTop">
                <div className="brandIdentity">
                  <div className="brandAvatar">
                    {brand.initials}
                  </div>

                  <div>
                    <h3>{brand.name}</h3>
                    <p>{brand.category}</p>
                  </div>
                </div>

           <button
                className="moreButton"
                onClick={() =>
                  setOpenMenu(openMenu === brand.name ? null : brand.name)
                } 
            >
             •••
            </button>
            {openMenu === brand.name && (
               <div className="competitorMenu">
                <button
                   onClick={() => {
                     setEditingCompetitor(brand)
                     setShowModal(true)
                     setOpenMenu(null)
                    }}
                  >
                    Edit
               </button>

               <button
                  onClick={() => {
                     handleDeleteCompetitor(brand.name)
                     setOpenMenu(null)
                   }}
                >
                  Delete
              </button>
            </div>
          )}

              </div>

              <div className="brandMetrics">

                <div>
                  <span>Followers</span>
                  <strong>{brand.followers}</strong>
                </div>

                <div>
                  <span>Engagement</span>
                  <strong>{brand.engagement}</strong>
                </div>

                <div>
                  <span>Posts</span>
                  <strong>{brand.posts}</strong>
                </div>

              </div>

              <div className="brandFooter">
                <span className="brandGrowth">
                 Social media metrics coming soon
                </span>
               <button
                 className="analysisButton"
                 onClick={() => setSelectedCompetitor(brand)}
                >
                     View analysis →
               </button>
              </div>

            </div>
          ))}

          <button
            className="newCompetitorCard"
            onClick={() => setShowModal(true)}
            >
            <span>+</span>
            <strong>Add another brand</strong>
            <p>Expand your competitor radar</p>
          </button>

        </section>

        {showModal && (
           <AddCompetitorModal
             onClose={() => {
               setShowModal(false)
               setEditingCompetitor(null)
            }}
           onAdd={
             editingCompetitor
                ? handleEditCompetitor
                : handleAddCompetitor
           }
           initialData={editingCompetitor}
       />
     )}

     {selectedCompetitor && (
  <div className="analysisOverlay">
    <div className="analysisModal">

      <button
        className="analysisClose"
        onClick={() => setSelectedCompetitor(null)}
      >
        ×
      </button>

      <p className="eyebrow">COMPETITOR ANALYSIS</p>

      <h2>{selectedCompetitor.name}</h2>
      <p>{selectedCompetitor.category}</p>

      <div className="analysisMetrics">
        <div>
          <span>Followers</span>
          <strong>{selectedCompetitor.followers}</strong>
        </div>

        <div>
          <span>Engagement</span>
          <strong>{selectedCompetitor.engagement}</strong>
        </div>

        <div>
          <span>Posts</span>
          <strong>{selectedCompetitor.posts}</strong>
        </div>

        <div>
          <span>Monthly Growth</span>
          <strong>{selectedCompetitor.trend}</strong>
        </div>
      </div>

    </div>
  </div>
)}


      </main>

    </div>
  )
}

export default Competitors
