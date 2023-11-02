import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-center">
      <Image src="/logo.png" alt="logo" />
      <p>
        At CodeConquerors, we're dedicated to crafting innovative and
        exceptional web solutions that cater to your unique needs.
      </p>
      <Image src="/logo.png" alt="logo" />
    </div>
  );
};

export default Footer;
