
import DiffViewer from 'react-diff-viewer';

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
  }
}`;

function JsonDiffViewer() {
  return (
    <div className="p-6 font-mono">
      <h2 className="text-xl mb-4">Version Comparison</h2>
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
