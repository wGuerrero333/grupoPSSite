import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SubscriptionForm from './pages/SubscriptionForm'
import PublishForm from './pages/PublishForm'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SubscriptionForm />} />
          <Route path="/vender" element={<PublishForm />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
