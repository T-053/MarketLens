import '../App.css'
import Sidebar from '../components/Sidebar'

function Analytics() {
  const platforms = [
    { name: 'Instagram', value: 82, engagement: '8.2%' },
    { name: 'TikTok', value: 74, engagement: '7.4%' },
    { name: 'YouTube', value: 51, engagement: '5.1%' },
  ]

  return (
    <div className="app">
      <Sidebar />

      <main className="main analyticsPage">

        <header className="analyticsHeader">
          <div>
            <p className="eyebrow">PERFORMANCE CENTER</p>
            <h1>See the bigger picture</h1>
            <p className="subtitle">
              Understand how your tracked market is changing over time.
            </p>
          </div>

          <div className="analyticsActions">
            <button>Last 30 days⌄</button>
            <button className="exportButton">Export report</button>
          </div>
        </header>

        <section className="analyticsStats">

          <div className="analyticsStat">
            <span>Total reach</span>
            <strong>1.8M</strong>
            <p>↑ 14.2% this month</p>
          </div>

          <div className="analyticsStat">
            <span>Avg. engagement</span>
            <strong>6.8%</strong>
            <p>↑ 1.4% this month</p>
          </div>

          <div className="analyticsStat">
            <span>Market growth</span>
            <strong>+18.4%</strong>
            <p>Across tracked brands</p>
          </div>

          <div className="analyticsStat">
            <span>Posts analyzed</span>
            <strong>1,245</strong>
            <p>Last 30 days</p>
          </div>

        </section>

        <section className="analyticsMainGrid">

          <div className="card performanceChart">

            <div className="analyticsCardHeader">
              <div>
                <p className="eyebrow">MARKET PERFORMANCE</p>
                <h3>Engagement over time</h3>
              </div>

              <span className="chartLegend">
                ● Market average
              </span>
            </div>

            <div className="analyticsChart">

              <div className="chartLabels">
                <span>10%</span>
                <span>7.5%</span>
                <span>5%</span>
                <span>2.5%</span>
              </div>

              <div className="chartArea">

                <div className="chartGridLine line1"></div>
                <div className="chartGridLine line2"></div>
                <div className="chartGridLine line3"></div>
                <div className="chartGridLine line4"></div>

                <svg
                  viewBox="0 0 700 220"
                  preserveAspectRatio="none"
                  className="analyticsLine"
                >
                  <polyline
                    points="0,175 100,145 200,155 300,95 400,120 500,65 600,85 700,40"
                    fill="none"
                    stroke="#6959dc"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="chartMonths">
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                </div>

              </div>

            </div>

          </div>

          <div className="card topPerformer">

            <p className="eyebrow">TOP PERFORMER</p>
            <h3>Leading the market</h3>

            <div className="performerBrand">
              <div className="performerAvatar">NA</div>

              <div>
                <strong>Nova Active</strong>
                <p>Sports & Activewear</p>
              </div>
            </div>

            <div className="performerMetric">
              <span>Engagement</span>
              <strong>7.9%</strong>
            </div>

            <div className="performerMetric">
              <span>Monthly growth</span>
              <strong className="positiveMetric">+18%</strong>
            </div>

            <div className="performerMetric">
              <span>Content score</span>
              <strong>92 / 100</strong>
            </div>

            <button className="performerButton">
              View competitor →
            </button>

          </div>

        </section>

        <section className="analyticsBottomGrid">

          <div className="card platformCard">

            <p className="eyebrow">PLATFORM PERFORMANCE</p>
            <h3>Where engagement is strongest</h3>

            {platforms.map((platform) => (
              <div className="platformRow" key={platform.name}>

                <div className="platformInfo">
                  <span>{platform.name}</span>
                  <strong>{platform.engagement}</strong>
                </div>

                <div className="platformTrack">
                  <div style={{ width: `${platform.value}%` }}></div>
                </div>

              </div>
            ))}

          </div>

          <div className="analyticsInsight">

            <span>✦ MARKET INSIGHT</span>

            <h2>
              Short-form content is driving this month's growth.
            </h2>

            <p>
              Video posts are generating stronger engagement than static
              content across your tracked market.
            </p>

            <button>Explore content analysis →</button>

          </div>

        </section>

      </main>
    </div>
  )
}

export default Analytics
