import '../../App.css';

export default () => {
    return (
        <div className="Cards">
            <div className="card">
                <h5>Instant Server Start</h5>
                <p>On demand file serving over native ESM, no bundling required!</p>
            </div>
            <div className="card">
                <h5>Lightning Fast HMR</h5>
                <p>Hot Module Replacement (HMR) that stays fast regardless of app size.</p>
            </div>
            <div className="card">
                <h5>Rich Features</h5>
                <p>Out-of-the-box support for TypeScript, JSX, CSS and more.</p>
            </div>
            <div className="card">
                <h5>Optimized Build</h5>
                <p>Pre-configured Rollup build with multi-page and library mode support.</p>
            </div>
            <div className="card">
                <h5>Universal Plugins</h5>
                <p>Rollup-superset plugin interface shared between dev and build.</p>
            </div>
            <div className="card">
                <h5>Fully Typed APIs</h5>
                <p>Flexible programmatic APIs with full TypeScript typing.</p>
            </div>
        </div>
    );
}

// style={{ display: 'flex'}