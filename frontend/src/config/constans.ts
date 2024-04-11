const URLBASE = 'http://localhost:3000' ?? ''
console.log(URLBASE)

export const ENDPOINT = {
  base: `${URLBASE}/`,
  profile: `${URLBASE}/profile`,
  login: `${URLBASE}/login`,
  register: `${URLBASE}/register`,
  newproduct: `${URLBASE}/newproduct`,
  products: `${URLBASE}/products`
}
