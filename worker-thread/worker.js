onmessage = () => {
  let i = 0;
  for (i = 0; i < 99900000000; i++) {}
  postMessage(i);
};
