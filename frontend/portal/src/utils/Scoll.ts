export const ScollUpToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }
};
