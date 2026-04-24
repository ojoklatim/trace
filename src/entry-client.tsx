import { hydrateRoot } from 'react-dom/client'
console.log('Hydrating app...');
import { StartClient } from '@tanstack/react-start'

import { createRouter } from './router'

const router = createRouter()


hydrateRoot(document, <StartClient router={router} />)
