import { useState, useEffect } from 'react';

const useHacking = (target = 'NASA', skills = ['HTML']) => {
    const [logs, setLogs] = useState([]);
    const [status, setStatus] = useState('idle'); // idle, hacking, success, failure

    useEffect(() => {
        if (status === 'hacking') {
            const interval = setInterval(() => {
                setLogs((prevLogs) => [
                    ...prevLogs,
                    `Hacking ${target} with ${skills.join(', ')}...`,
                ]);
            }, 1000);

            setTimeout(() => {
                setStatus(Math.random() > 0.5 ? 'success' : 'failure');
                clearInterval(interval);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [status, target, skills]);

    const startHacking = () => setStatus('hacking');
    const reset = () => {
        setStatus('idle');
        setLogs([]);
    };

    return { logs, status, startHacking, reset };
};

export default useHacking;
