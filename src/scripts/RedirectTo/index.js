export const redirectTo = (history, ref) => {
    if (history) {
      history.push(ref);
    } else {
      window.location.href = ref;
    }
  };