import NavItem from "./NavItem/NavItem.jsx";

const TopNav = () => {
  return (
    <div className="navbar bg-gray-800 rounded-b-xl">
      <div className="navbar-start">
        <NavItem className="btn btn-ghost text-3xl text-primary" href={"/"}>
          Epic Lotto
        </NavItem>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavItem href={"play"}>Play Now!</NavItem>
          </li>
          <li>
            <NavItem href={"my-numbers"}>Previous Numbers</NavItem>
          </li>
          <li>
            <NavItem
              className="text-accent-content hover:text-accent text-xl "
              href={""}
            >
              Page 3
            </NavItem>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div />
      </div>
    </div>
  );
};
export default TopNav;
