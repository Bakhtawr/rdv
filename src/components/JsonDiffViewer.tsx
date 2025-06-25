import DiffViewer from 'react-diff-viewer';
import { useState, useEffect } from 'react';

const oldVersion = `{
  "version": "v1.3",
  "contentSection": {
    "fixedHeight": true,
    "height": 500
  }
}`;

const newVersion = `{
  "version": "v1.4",
  "contentSection": {
    "responsive": true,
    "minHeight": 300,
    "expandable": true 
    },
}`;

function JsonDiffViewer() {
  const [changeSummary, setChangeSummary] = useState({ added: 0, removed: 0 });

  useEffect(() => {
    const oldLines = oldVersion.split('\n');
    const newLines = newVersion.split('\n');
    
    const added = newLines.filter(line => !oldVersion.includes(line)).length;
    const removed = oldLines.filter(line => !newVersion.includes(line)).length;
    
    setChangeSummary({ added, removed });
  }, []);

  return (
    <div className="p-6 font-mono">
      <h2 className="text-xl mb-4 font-semibold">Version Comparison</h2>
      <div className="mb-4 flex gap-4 text-sm">
        {changeSummary.added > 0 && (
          <span className="text-green-600 bg-green-50 px-3 py-1 rounded-md">
            +{changeSummary.added} line{changeSummary.added !== 1 ? 's' : ''} added
          </span>
        )}
        {changeSummary.removed > 0 && (
          <span className="text-red-600 bg-red-50 px-3 py-1 rounded-md">
            -{changeSummary.removed} line{changeSummary.removed !== 1 ? 's' : ''} removed
          </span>
        )}
      </div>
      <DiffViewer
        oldValue={oldVersion}
        newValue={newVersion}
        splitView={true}
        showDiffOnly={false}
        useDarkTheme={false}
      />
    </div>
  );
}

export default JsonDiffViewer;