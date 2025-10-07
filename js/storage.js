export const obtenerBugs = () => {
    const bugsJSON = localStorage.getItem('bugs');
    return bugsJSON ? JSON.parse(bugsJSON) : [];
};

export const guardarBugs = (bugs) => {
    localStorage.setItem('bugs', JSON.stringify(bugs));
};

export const agregarBug = (bug) => {
    const bugs = obtenerBugs();
    bugs.push(bug);
    guardarBugs(bugs);
};

export const limpiarBugs = () => {
    localStorage.removeItem('bugs');
};