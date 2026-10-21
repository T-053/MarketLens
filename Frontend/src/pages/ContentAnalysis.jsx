import '../App.css'
import Sidebar from '../components/Sidebar'

function ContentAnalysis() {
  const topContent = [
    {
      brand: 'Urban Thread',
      title: '3 ways to style your everyday basics',
      type: 'Reel',
      views: '142K',
      engagement: '8.4%',
      growth: '+26%',
      initials: 'UT',
    },
    {
      brand: 'Nova Active',
      title: 'Morning movement challenge',
      type: 'Video',
      views: '98K',
      engagement: '7.9%',
      growth: '+19%',
      initials: 'NA',
    },
    {
      brand: 'Mellow Studio',
      title: 'Behind our minimal collection',
      type: 'Carousel',
      views: '76K',
      engagement: '7.1%',
      growth: '+14%',
      initials: 'MS',
    },
  ]

  return (
    <div className="app">
      <Sidebar />

      <main className="main contentPage">

        <header className="contentHeader">
          <div>
            <p className="eyebrow">CONTENT INTELLIGENCE</p>
            <h1>Understand what's working</h1>
            <p className="subtitle">
              Discover the content formats and ideas getting audience attention.
            </p>
          </div>

          <div className="contentFilters">
            <button>All competitors⌄</button>
            <button>Last 30 days⌄</button>
          </div>
        </header>

        <section className="card topContentCard">

          <div className="contentSectionTitle">
            <div>
              <p className="eyebrow">TOP CONTENT</p>
              <h3>Posts people are responding to</h3>
            </div>

            <span className="contentInsight">
              ↑ Engagement is up 18%
            </span>
          </div>

          {topContent.map((post, index) => (
            <div className="contentPost" key={post.title}>

              <span className="contentRank">0{index + 1}</span>

              <div className="contentBrandAvatar">
                {post.initials}
              </div>

              <div className="contentPostInfo">
                <span>{post.brand}</span>
                <strong>{post.title}</strong>
                <p>{post.type} · {post.views} views</p>
              </div>

              <div className="contentEngagement">
                <span>Engagement</span>
                <strong>{post.engagement}</strong>
              </div>

              <span className="contentGrowth">
                ↑ {post.growth}
              </span>

            </div>
          ))}

        </section>

        <section className="contentInsightGrid">

          <div className="card contentMixCard">
            <p className="eyebrow">CONTENT MIX</p>
            <h3>What competitors are posting</h3>

            <div className="mixItem">
              <div>
                <span>Short videos</span>
                <strong>46%</strong>
              </div>
              <div className="mixTrack">
                <div style={{ width: '46%' }}></div>
              </div>
            </div>

            <div className="mixItem">
              <div>
                <span>Images</span>
                <strong>31%</strong>
              </div>
              <div className="mixTrack">
                <div style={{ width: '31%' }}></div>
              </div>
            </div>

            <div className="mixItem">
              <div>
                <span>Carousels</span>
                <strong>15%</strong>
              </div>
              <div className="mixTrack">
                <div style={{ width: '15%' }}></div>
              </div>
            </div>

            <div className="mixItem">
              <div>
                <span>Other</span>
                <strong>8%</strong>
              </div>
              <div className="mixTrack">
                <div style={{ width: '8%' }}></div>
              </div>
            </div>
          </div>

          <div className="card workingCard">
            <p className="eyebrow">PATTERN FINDER</p>
            <h3>What's working</h3>

            <div className="workingItem">
              <span>01</span>
              <div>
                <strong>Short-form video</strong>
                <p>Gets 2.4× more interaction</p>
              </div>
              <b>↗</b>
            </div>

            <div className="workingItem">
              <span>02</span>
              <div>
                <strong>How-to content</strong>
                <p>Strong saves and shares</p>
              </div>
              <b>↗</b>
            </div>

            <div className="workingItem">
              <span>03</span>
              <div>
                <strong>Behind the scenes</strong>
                <p>Building stronger conversations</p>
              </div>
              <b>↗</b>
            </div>
          </div>

          <div className="card postingCard">
            <p className="eyebrow">TIMING SIGNAL</p>
            <h3>Best posting windows</h3>

            <div className="postingTime">
              <span>Tuesday</span>
              <strong>7:00 PM</strong>
            </div>

            <div className="postingTime">
              <span>Thursday</span>
              <strong>6:00 PM</strong>
            </div>

            <div className="postingTime">
              <span>Saturday</span>
              <strong>11:00 AM</strong>
            </div>

            <p className="timingNote">
              Based on engagement across tracked competitors.
            </p>
          </div>

        </section>

      </main>
    </div>
  )
}

export default ContentAnalysis
