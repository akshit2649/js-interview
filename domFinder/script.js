const findNodeValue = () => {
  const rootA = document.getElementById("rootA");
  const rootB = document.getElementById("rootB");
  const nodeA = document.getElementById("nodeA");
  const path = getPathFromChildToParent(rootA, nodeA);
  return getValueFromPath(rootB, path);
};

function getPathFromChildToParent(parent, child) {
  let currentNode = child;
  const pathArray = [];
  while (currentNode !== parent) {
    const parentEl = currentNode.parentElement;
    const childrenArray = Array.from(parentEl.children);
    pathArray.push(childrenArray.indexOf(currentNode));
    currentNode = parent;
  }
  return pathArray;
}

function getValueFromPath(parent, path) {
  let currentNode = parent;
  while (path.length) {
    currentNode = currentNode.children[path.pop()];
  }

  return currentNode.innerText;
}

console.log(findNodeValue());
