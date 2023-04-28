function setRootFontSize(doc, win) {
  const clientWidth = win.innerWidth || doc.documentElement.clientWidth;
  if (!clientWidth) return;

  // Check if the device is a PC
  const isPC = win.matchMedia("(min-width: 1024px)").matches;
  if (isPC) {
    doc.documentElement.style.fontSize = "72px";
    return;
  }

  // Set font size based on screen width
  const baseFontSize = 100 * (clientWidth / 390);
  if (clientWidth >= 540) {
    doc.documentElement.style.fontSize = "100px";
  } else {
    doc.documentElement.style.fontSize = baseFontSize + "px";
  }
}

export default setRootFontSize;
