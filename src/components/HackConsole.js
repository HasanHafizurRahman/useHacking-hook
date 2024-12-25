import React from 'react';

const HackConsole = ({ logs, status }) => {
    return (
        <div style={{ fontFamily: 'monospace', background: '#000', color: '#0f0', padding: '1em' }}>
            <div>
                <strong>Status: {status.toUpperCase()}</strong>
            </div>
            <pre>{logs.join('\n')}</pre>
        </div>
    );
};

export default HackConsole;
