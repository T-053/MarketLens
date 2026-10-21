import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Competitors from './pages/Competitors'
import Trends from './pages/Trends'
import ContentAnalysis from './pages/ContentAnalysis'
import Campaigns from './pages/Campaigns'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/competitors" element={<Competitors />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/content-analysis" element={<ContentAnalysis />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
