import '../App.css'
import Sidebar from '../components/Sidebar'

function Trends() {
  const trends = [
    {
      tag: '#SustainableFashion',
      posts: '12.4K',
      engagement: '8.2%',
      growth: '+24%',
      status: 'Rising fast',
    },
    {
      tag: '#StreetStyle',
      posts: '9.8K',
      engagement: '6.1%',
      growth: '+18%',
      status: 'Growing',
    },
    {
      tag: '#WorkoutMotivation',
      posts: '7.2K',
      engagement: '5.4%',
      growth: '+12%',
      status: 'Growing',
    },
    {
      tag: '#NewCollection',
      posts: '6.9K',
      engagement: '4.8%',
      growth: '+8%',
      status: 'Steady rise',
    },
  ]

  return (
    <div className="app">
      <Sidebar />

      <main className="main trendsPage">

        <header className="trendsHeader">
          <div>
            <p className="eyebrow">MARKET SIGNALS</p>
            <h1>What's moving right now</h1>
            <p className="subtitle">
              Spot conversations gaining attention across your market.
            </p>
          </div>

          <button className="period">Last 7 days⌄</button>
        </header>

        <div className="trendFilters">
          <button className="filterActive">All trends</button>
          <button>Fashion</button>
          <button>Lifestyle</button>
          <button>Fitness</button>
          <button>Emerging</button>
        </div>

        <section className="trendPageGrid">

          <div className="card risingTrends">

            <div className="trendSectionHeading">
              <div>
                <p className="eyebrow">RISING TOPICS</p>
                <h3>Conversations picking up speed</h3>
              </div>

              <span className="liveBadge">● LIVE</span>
            </div>

            <div className="trendTableHeader">
              <span>Topic</span>
              <span>Posts</span>
              <span>Engagement</span>
              <span>Momentum</span>
            </div>

            {trends.map((trend, index) => (
              <div className="trendRow" key={trend.tag}>

                <div className="trendName">
                  <span className="trendNumber">
                    0{index + 1}
                  </span>

                  <div>
                    <strong>{trend.tag}</strong>
                    <p>{trend.status}</p>
                  </div>
                </div>

                <span>{trend.posts}</span>

                <span>{trend.engagement}</span>

                <span className="trendGrowth">
                  ↑ {trend.growth}
                </span>

              </div>
            ))}

          </div>

          <div className="card momentumCard">

            <p className="eyebrow">TREND MOMENTUM</p>
            <h3>Weekly movement</h3>

            <div className="momentumVisual">

              <div className="momentumBars">
                <div style={{ height: '42%' }}></div>
                <div style={{ height: '58%' }}></div>
                <div style={{ height: '48%' }}></div>
                <div style={{ height: '70%' }}></div>
                <div style={{ height: '63%' }}></div>
                <div style={{ height: '82%' }}></div>
                <div style={{ height: '94%' }}></div>
              </div>

              <div className="momentumDays">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>

            </div>

            <div className="momentumSummary">
              <strong>+31%</strong>
              <p>
                Overall conversation growth across your tracked market.
              </p>
            </div>

          </div>

        </section>

        <section className="card emergingCard">

          <div>
            <p className="eyebrow">EARLY SIGNALS</p>
            <h3>Emerging conversations</h3>
            <p className="subtitle">
              Smaller topics beginning to attract attention.
            </p>
          </div>

          <div className="topicChips">
            <span>Quiet Luxury <b>↗</b></span>
            <span>AI Fashion <b>↗</b></span>
            <span>Eco Packaging <b>↗</b></span>
            <span>Micro Influencers <b>↗</b></span>
            <span>Community First <b>↗</b></span>
          </div>

        </section>

      </main>
    </div>
  )
}

export default Trends
