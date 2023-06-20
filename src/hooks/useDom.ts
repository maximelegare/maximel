
export const useDom = () => {
  const bodyOverflowHidden = () => {
    // document.querySelector("body")?.classList.add("overflow-hidden");
  };
  
  const bodyOverflowVisible = () => {
    // document.querySelector("body")?.classList.remove("overflow-hidden");
  };

  return {
    bodyOverflowHidden,
    bodyOverflowVisible,
  };
};
