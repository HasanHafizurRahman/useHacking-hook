const generateRandomLog = (target, skills) => {
  const actions = ['Accessing', 'Encrypting', 'Decrypting', 'Uploading', 'Deploying'];
  const objects = ['firewalls', 'satellites', 'databases', 'HTML5 APIs', 'inline styles'];
  return `${actions[Math.floor(Math.random() * actions.length)]} ${objects[Math.floor(Math.random() * objects.length)]} on ${target} using ${skills.join(', ')}...`;
};

export default generateRandomLog;
