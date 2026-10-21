import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <div className="logoMark">M</div>
        <span>Market Lens</span>
      </div>

      <p className="menuLabel">WORKSPACE</p>

      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'navItem active' : 'navItem'
          }
        >
          ⌂ <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/competitors"
          className={({ isActive }) =>
            isActive ? 'navItem active' : 'navItem'
          }
        >
          ◎ <span>Competitors</span>
        </NavLink>
        
        <NavLink
          to="/trends"
          className={({ isActive }) =>
            isActive ? 'navItem active' : 'navItem'
         }
        >
          ↗ <span>Trends</span>
        </NavLink>


        <NavLink
          to="/content-analysis"
          className={({ isActive }) =>
            isActive ? 'navItem active' : 'navItem'
         }
>
           ▣ <span>Content Analysis</span>
        </NavLink>

       <NavLink
        to="/campaigns"
        className={({ isActive }) =>
        isActive ? 'navItem active' : 'navItem'
         }
        >
          ◉ <span>Campaigns</span>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? 'navItem active' : 'navItem'
         }
        >
          ▥ <span>Analytics</span>
        </NavLink>

</nav>

      <div className="sidebarBottom">
        <NavLink
           to="/settings"
           className={({ isActive }) =>
              isActive ? 'navItem active' : 'navItem'
         }
        >
          ⚙ <span>Settings</span>
        </NavLink>

       
        <div className="user">
          <div className="avatar">A</div>

          <div>
            <strong>Angel</strong>
            <p>Marketing Analyst</p>
          </div>
        </div>

      </div>

    </aside>
  )
}

export default Sidebar
