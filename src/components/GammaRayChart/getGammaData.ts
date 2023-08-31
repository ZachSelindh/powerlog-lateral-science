export const getGammaData = () => {
    const depthMax = 5000;
    const max = 250;
    const arr = [];
  
    for (let i = 0; i < depthMax; i += 100) {
      arr.push([i, Math.random() * max])
    }
  
    return arr;
  }