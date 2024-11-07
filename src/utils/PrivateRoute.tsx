import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
interface IPrivateRoute {
  children: ReactNode;
}
const PrivateRoute = ({ children }: IPrivateRoute) => {
  const { index } = useParams<{ index: string }>();
  const navigate = useNavigate();
  const access = useSelector(
    (state: { floorAccess: { floorAccess: [boolean, boolean, boolean, boolean, boolean] } }) =>
      state.floorAccess.floorAccess
  );
  const floorIndex = parseInt(index || "0");
  if (!access[floorIndex]) {
    navigate("/forbidden");
    return null;
  }
  return <>{children}</>;
};
export default PrivateRoute;