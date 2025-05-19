export function isOwner(email, myInfo) {
  if (!sessionStorage.getItem("info")) {
    return false;
  }

  if (myInfo?.role === "ROLE_ADMIN") {
    return true;
  }

  return myInfo?.email === email;
}

export function isAuthority(action, myInfo) {
  if (!sessionStorage.getItem("info")) {
    return false;
  }

  return (
    myInfo?.actionList.filter((eachAction) => eachAction.actionId === action)
      .length > 0
  );
}
