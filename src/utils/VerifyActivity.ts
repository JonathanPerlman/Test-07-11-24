import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const activityIndex = activities.indexOf(activity);

  if (activityIndex === -1) {
    return false;
  }

  const roleIndex = roles.indexOf(role);

  if (roleIndex === -1) {
    return false;
  }

  return roleIndex >= activityIndex;
};

export default useIsVerified;