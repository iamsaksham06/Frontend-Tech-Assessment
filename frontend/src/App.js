import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Pipeline Builder</h1>
      </header>
      <div className="app-content">
        <PipelineToolbar />
        <PipelineUI />
      </div>
      <footer className="app-footer">
        <SubmitButton />
      </footer>
    </div>
  );
}

export default App;
