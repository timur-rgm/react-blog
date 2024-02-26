import { createRoot } from 'react-dom/client'
import { App } from 'app/App'
import 'shared/config/i18n/i18n'

const root = createRoot(document.getElementById('root') as Element)

root.render(<App />)
