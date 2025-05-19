export function isOwner(email, myInfo) {
  if (myInfo?.role === "ROLE_ADMIN") {
    return true;
  }

  return myInfo?.email === email;
}

export function isAuthority(action, myInfo) {
  return (
    myInfo?.actionList?.filter((eachAction) => eachAction.actionId === action)
      .length > 0
  );
}
