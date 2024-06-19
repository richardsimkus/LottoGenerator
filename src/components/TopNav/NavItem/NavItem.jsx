import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItem = ({ children, href, ...props }) => {
  return (
    <Link
      className="text-white hover:text-accent text-xl "
      {...props}
      to={href}
    >
      {children}
    </Link>
  );
};

export default NavItem;

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
