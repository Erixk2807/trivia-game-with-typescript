export const shuffle = (array: string[]) => {
  let tempValue;
  for (let i = array.length - 1; i > 0; i--) {
    let randomIndex: number = Math.floor(Math.random() * (i + 1));
    tempValue = array[i];
    array[i] = array[randomIndex];
    array[i] = tempValue;
  }
  return array;
};

export const replaceURI = (element: string) => {
  return element
    .replace(/&amp;/g, "&")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
};
