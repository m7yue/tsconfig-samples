interface UserDefaults {
  colorThemeOverride?: "dark" | "light";
}

const func = (user: UserDefaults) => {
  return user
}

const res = func({})

const b = res.colorThemeOverride