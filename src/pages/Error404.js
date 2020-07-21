const Error404 = () => {
  const view = `
    <section class="error">
      <h2 class="error__main">Error 404</h2>
      <h3 class="error__second">You are searching something that <br/>does not exist!</h3>
    </section>
  `;
  return view;
};

export default Error404;
