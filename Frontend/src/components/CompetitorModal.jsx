import { useState } from 'react'

function AddCompetitorModal({ onClose, onAdd, initialData }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    category: initialData?.category || 'Fashion & Lifestyle',
    platform: initialData?.platform || 'Instagram',
    handle: initialData?.handle || '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name.trim()) {
      return
    }

    onAdd(formData)
    onClose()
  }

  return (
    <div className="modalOverlay">
      <div className="competitorModal">

        <div className="modalHeader">
          <div>
            <p className="eyebrow">
                {initialData ? 'EDIT COMPETITOR' : 'NEW COMPETITOR'}
            </p>

            <h2>
              {initialData ? 'Edit competitor' : 'Add a competitor'}
           </h2>
 
            <p>
              {initialData
                  ? 'Update the details of this competitor.'
                  : 'Start tracking another brand in your market.'}
            </p>
          </div>

          <button
            type="button"
            className="modalClose"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <label className="modalField">
            Brand name

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Zara"
              required
            />
          </label>

          <label className="modalField">
            Category

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option>Fashion & Lifestyle</option>
              <option>Sports & Activewear</option>
              <option>Beauty</option>
              <option>Technology</option>
              <option>Food & Beverage</option>
            </select>
          </label>

          <label className="modalField">
            Platform

            <select
              name="platform"
              value={formData.platform}
              onChange={handleChange}
            >
              <option>Instagram</option>
              <option>TikTok</option>
              <option>YouTube</option>
            </select>
          </label>

          <label className="modalField">
            Username / Handle

            <input
              type="text"
              name="handle"
              value={formData.handle}
              onChange={handleChange}
              placeholder="@brandname"
            />
          </label>

          <div className="modalActions">

            <button
              type="button"
              className="cancelModal"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="confirmModal"
            >
            {initialData ? 'Save changes' : '+ Add competitor'}
            </button>

          </div>

        </form>

      </div>
    </div>
  )
}

export default AddCompetitorModal
