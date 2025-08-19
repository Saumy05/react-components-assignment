import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          React Components Assignment
        </h1>
        <p className="text-gray-600 mb-4">
          This is a demo project showcasing InputField and DataTable components.
        </p>
        <p className="text-gray-600">
          Run <code className="bg-gray-200 px-2 py-1 rounded">npm run storybook</code> to see the components in action.
        </p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
