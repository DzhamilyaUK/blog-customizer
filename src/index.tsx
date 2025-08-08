import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './components/App'; // Импортируем App из отдельного файла
import './styles/index.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
	const root = createRoot(rootElement);
	root.render(
		<StrictMode>
			<App />
		</StrictMode>
	);
} else {
	console.error('Root element not found');
}
