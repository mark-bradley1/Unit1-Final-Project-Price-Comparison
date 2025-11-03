const Footer = () => {
  let dateYear = new Date().getFullYear();

  return <footer>&copy; Mark Bradley {dateYear}</footer>;
};

export default Footer;
