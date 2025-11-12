const Footer = () => {
  let dateYear = new Date().getFullYear();

  return (
    <footer>
      <div id="foot">&copy; {dateYear} GPCMB. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
