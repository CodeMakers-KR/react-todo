export function isOwner(email) {
  if (!sessionStorage.getItem("info")) {
    return false;
  }
  const myInfo = JSON.parse(sessionStorage.getItem("info"));

  if (myInfo?.role === "ROLE_ADMIN") {
    return true;
  }

  return myInfo?.email === email;
}

export function isAuthority(action) {
  if (!sessionStorage.getItem("info")) {
    return false;
  }
  const myInfo = JSON.parse(sessionStorage.getItem("info"));

  return (
    myInfo?.actionList.filter((eachAction) => eachAction.actionId === action)
      .length > 0
  );
}
