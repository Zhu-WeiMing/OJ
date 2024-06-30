import AccessEnum from "@/access/accessEnum";

/**
 * 检查权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @return boolean 有无权限
 */
const checkAccess = (loginUser: any, needAccess = AccessEnum.NOT_LOGIN) => {
  //获取当前登录用户具有的权限（如果没有 loginUser，则表示未登录）
  const loginUserAccess = loginUser?.userRole ?? AccessEnum.NOT_LOGIN;
  if (needAccess === AccessEnum.NOT_LOGIN) {
    return true;
  }
  //如果用户登陆才能访问
  if (needAccess === AccessEnum.USER) {
    //如果用户没登陆，那么表示无权限
    if (loginUserAccess === AccessEnum.NOT_LOGIN) {
      return false;
    }
  }
  //如果需要管理员权限
  if (needAccess === AccessEnum.ADMIN) {
    //如果不是管理员，表示无权限
    if (loginUserAccess !== AccessEnum.ADMIN) {
      return false;
    }
  }

  return true;
};

export default checkAccess;
