# **usehacking**
A fun and interactive React hook to simulate "hacking" into targets like NASA, the Moon, or even a coffee machine—powered by HTML (and other "elite" skills)! Perfect for adding a humorous touch to your React applications.

---

## **Features**
- Simulate hacking activities with random logs.
- Use terminal-style components to display progress.
- Customizable targets and skills.
- CLI tool for quick hacking demonstrations in the terminal.

---

## **Installation**

### Using npm:
```bash
npm install usehacking
```

### Using yarn:
```bash
yarn add usehacking
```

---

## **Usage**

### **React Hook**
Import the `useHacking` hook and use it to build your own "hacker terminal."

```jsx
import React, { useState } from 'react';
import { useHacking } from 'usehacking';

const App = () => {
    const [target, setTarget] = useState('NASA');
    const [skills, setSkills] = useState(['HTML', 'CSS']);
    const { logs, status, startHacking, reset } = useHacking(target, skills);

    return (
        <div style={{ fontFamily: 'monospace', padding: '20px', background: '#000', color: '#0f0' }}>
            <h1>💻 Hacker Simulator</h1>
            <p>Target: {target}</p>
            <p>Skills: {skills.join(', ')}</p>
            <button onClick={startHacking} disabled={status === 'hacking'}>Start Hacking</button>
            <button onClick={reset}>Reset</button>
            <div style={{ marginTop: '20px' }}>
                <strong>Status:</strong> {status.toUpperCase()}
            </div>
            <pre>{logs.join('\n')}</pre>
        </div>
    );
};

export default App;
```

### **Hack Console Component**
The library includes a terminal-style React component for displaying logs.

```jsx
import React, { useState } from 'react';
import { useHacking, HackConsole } from 'usehacking';

const App = () => {
    const [target, setTarget] = useState('The Moon');
    const [skills, setSkills] = useState(['JavaScript']);
    const { logs, status, startHacking, reset } = useHacking(target, skills);

    return (
        <div>
            <h1>Hacker Console</h1>
            <button onClick={startHacking}>Start Hacking</button>
            <button onClick={reset}>Reset</button>
            <HackConsole logs={logs} status={status} />
        </div>
    );
};

export default App;
```

---

## **CLI Tool**
The `usehacking` package comes with a CLI tool for quick "hacking" demonstrations.

### Usage:
```bash
npx usehacking
```

Example Output:
```
🚀 Hacking NASA...
💻 Deploying HTML...
🛠️ Success! NASA compromised with <marquee> tags.
```

---

## **Customization**

### **Hook Parameters**
| Parameter | Type       | Default  | Description                                      |
|-----------|------------|----------|--------------------------------------------------|
| `target`  | `string`   | `"NASA"` | The target you want to "hack."                  |
| `skills`  | `string[]` | `["HTML"]` | The skills you'll use for the hack (e.g., HTML).|

### **Return Values**
The `useHacking` hook provides:
| Value         | Type       | Description                                    |
|---------------|------------|------------------------------------------------|
| `logs`        | `string[]` | Array of logs generated during the "hacking."  |
| `status`      | `string`   | Current hacking status: `idle`, `hacking`, `success`, `failure`. |
| `startHacking`| `function` | Function to start hacking.                     |
| `reset`       | `function` | Function to reset the hacking simulation.      |

---

## **Example Project**
Check out [Hacker Simulator](https://github.com/your-username/hacker-simulator) for a full example project using `usehacking`.

---

## **Contributing**
Feel free to submit issues or pull requests to improve this package. Contributions are always welcome!

---

## **License**
This package is licensed under the **ISC License**. See the [LICENSE](./LICENSE) file for details.

---

## **Author**
**Hasan Hafizur Rahman**  
A developer who loves to bring humor and functionality together in React apps.
