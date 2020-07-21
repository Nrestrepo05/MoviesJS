const somethingWasWrong = () => {
  const view = `
    <section class="error">
      <h2 class="error__main">Sorry, something was wrong!</h2>
      <h3 class="error__second">Please try again later</h3>
    </section>
  `;
  return view;
};

export default somethingWasWrong;
