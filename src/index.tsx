import { createRoot  } from 'react-dom/client';
import { App } from './App';

const root = createRoot(document.getElementById('root') as Element); // createRoot(container!) if you use TypeScript
root.render(<App/>);