import '../App.css'
import Sidebar from '../components/Sidebar'

function Settings() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main settingsPage">

        <header className="settingsHeader">
          <p className="eyebrow">WORKSPACE SETTINGS</p>
          <h1>Make Market Lens yours</h1>
          <p className="subtitle">
            Manage your workspace, preferences and notifications.
          </p>
        </header>

        <div className="settingsLayout">

          <section className="settingsMain">

            <div className="settingsCard">
              <div className="settingsTitle">
                <div>
                  <p className="eyebrow">PROFILE</p>
                  <h3>Your information</h3>
                </div>

                <div className="settingsAvatar">A</div>
              </div>

              <div className="settingsFormGrid">
                <label>
                  Display name
                  <input type="text" defaultValue="Angel" />
                </label>

                <label>
                  Role
                  <input type="text" defaultValue="Marketing Analyst" />
                </label>
              </div>
            </div>

            <div className="settingsCard">
              <p className="eyebrow">WORKSPACE</p>
              <h3>Workspace details</h3>

              <div className="settingsFormGrid">
                <label>
                  Workspace name
                  <input type="text" defaultValue="Market Lens" />
                </label>

                <label>
                  Industry
                  <select defaultValue="Fashion & Lifestyle">
                    <option>Fashion & Lifestyle</option>
                    <option>Technology</option>
                    <option>Fitness</option>
                    <option>Food & Beverage</option>
                    <option>Beauty</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="settingsCard">
              <p className="eyebrow">DATA PREFERENCES</p>
              <h3>Default analytics view</h3>

              <div className="settingsFormGrid">
                <label>
                  Default period
                  <select defaultValue="Last 30 days">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </label>

                <label>
                  Primary platform
                  <select defaultValue="Instagram">
                    <option>Instagram</option>
                    <option>TikTok</option>
                    <option>YouTube</option>
                  </select>
                </label>
              </div>
            </div>

          </section>

          <aside className="settingsSide">

            <div className="settingsCard">
              <p className="eyebrow">NOTIFICATIONS</p>
              <h3>Stay in the loop</h3>

              <label className="notificationRow">
                <div>
                  <strong>Trend alerts</strong>
                  <p>Get notified about fast-growing topics.</p>
                </div>
                <input type="checkbox" defaultChecked />
              </label>

              <label className="notificationRow">
                <div>
                  <strong>Competitor activity</strong>
                  <p>Updates when tracked brands post.</p>
                </div>
                <input type="checkbox" defaultChecked />
              </label>

              <label className="notificationRow">
                <div>
                  <strong>Weekly report</strong>
                  <p>Receive a weekly performance summary.</p>
                </div>
                <input type="checkbox" />
              </label>
            </div>

            <div className="settingsTip">
              <span>✦ YOUR WORKSPACE</span>
              <h3>Keep your dashboard focused.</h3>
              <p>
                Choose preferences that match the market and platforms you
                monitor most often.
              </p>
            </div>

            <button className="saveSettings">
              Save changes
            </button>

          </aside>

        </div>

      </main>
    </div>
  )
}

export default Settings
