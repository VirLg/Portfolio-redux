import { Link, useLocation } from 'react-router-dom';
const HomePageItem = ({ prop }) => {
  const location = useLocation();
  return (prop&&prop.map(({ id, title }) => {
    return (
      <li key={id}>
        <Link to={`movies/${id}`} state={location}>
          {title}
        </Link>
      </li>
    );
  }))
};
export default HomePageItem;