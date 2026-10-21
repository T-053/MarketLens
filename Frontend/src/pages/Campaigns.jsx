import '../App.css'
import Sidebar from '../components/Sidebar'

function Campaigns() {
  const campaigns = [
    {
      name: 'Summer Story',
      platform: 'Instagram + TikTok',
      status: 'Active',
      progress: 72,
      reach: '184K',
      engagement: '7.2%',
      posts: 12,
    },
    {
      name: 'Everyday Motion',
      platform: 'Instagram',
      status: 'Active',
      progress: 48,
      reach: '96K',
      engagement: '6.4%',
      posts: 8,
    },
  ]

  return (
    <div className="app">
      <Sidebar />

      <main className="main campaignsPage">

        <header className="campaignHeader">
          <div>
            <p className="eyebrow">CAMPAIGN WORKSPACE</p>
            <h1>Turn insights into action</h1>
            <p className="subtitle">
              Plan, monitor and organize your marketing campaigns.
            </p>
          </div>

          <button className="newCampaignButton">
            + New campaign
          </button>
        </header>

        <section className="campaignSummary">

          <div className="campaignStat">
            <span>Active</span>
            <strong>3</strong>
            <p>Running now</p>
          </div>

          <div className="campaignStat">
            <span>Scheduled</span>
            <strong>2</strong>
            <p>Coming next</p>
          </div>

          <div className="campaignStat">
            <span>Completed</span>
            <strong>8</strong>
            <p>This quarter</p>
          </div>

          <div className="campaignStat">
            <span>Avg. engagement</span>
            <strong>6.8%</strong>
            <p className="positiveText">↑ 1.4% this month</p>
          </div>

        </section>

        <section className="campaignLayout">

          <div className="campaignMain">

            <div className="campaignSectionHeader">
              <div>
                <p className="eyebrow">ACTIVE CAMPAIGNS</p>
                <h3>Currently in motion</h3>
              </div>

              <button className="campaignViewButton">
                View all
              </button>
            </div>

            {campaigns.map((campaign) => (
              <div className="campaignCard" key={campaign.name}>

                <div className="campaignCardTop">
                  <div>
                    <div className="campaignStatus">
                      <span></span>
                      {campaign.status}
                    </div>

                    <h3>{campaign.name}</h3>
                    <p>{campaign.platform}</p>
                  </div>

                  <button className="moreButton">•••</button>
                </div>

                <div className="campaignProgressInfo">
                  <span>Campaign progress</span>
                  <strong>{campaign.progress}%</strong>
                </div>

                <div className="campaignProgress">
                  <div
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>

                <div className="campaignMetrics">
                  <div>
                    <span>Reach</span>
                    <strong>{campaign.reach}</strong>
                  </div>

                  <div>
                    <span>Engagement</span>
                    <strong>{campaign.engagement}</strong>
                  </div>

                  <div>
                    <span>Published posts</span>
                    <strong>{campaign.posts}</strong>
                  </div>
                </div>

                <button className="manageCampaign">
                  Open campaign →
                </button>

              </div>
            ))}

          </div>

          <aside className="campaignSide">

            <div className="card upcomingCard">
              <p className="eyebrow">UP NEXT</p>
              <h3>Upcoming launches</h3>

              <div className="upcomingItem">
                <div className="dateBox">
                  <strong>12</strong>
                  <span>OCT</span>
                </div>

                <div>
                  <strong>Eco Edit Launch</strong>
                  <p>Instagram · Scheduled</p>
                </div>
              </div>

              <div className="upcomingItem">
                <div className="dateBox">
                  <strong>18</strong>
                  <span>OCT</span>
                </div>

                <div>
                  <strong>Weekend Drop</strong>
                  <p>Instagram + TikTok</p>
                </div>
              </div>

              <div className="upcomingItem">
                <div className="dateBox">
                  <strong>24</strong>
                  <span>OCT</span>
                </div>

                <div>
                  <strong>Community Week</strong>
                  <p>Multi-platform</p>
                </div>
              </div>
            </div>

            <div className="campaignTip">
              <span>✦ MARKET LENS TIP</span>

              <h3>Your audience is most active on Thursday.</h3>

              <p>
                Consider scheduling your next campaign post around 6 PM.
              </p>
            </div>

          </aside>

        </section>

      </main>
    </div>
  )
}

export default Campaigns
