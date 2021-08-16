interface Staff{
  _id: string,
  first_name: string,
  last_name: string,
  role: string,
  email: string,
  phone_number: string
}

interface Branch{
  _id: string,
  name: string,
  address: Address
}

interface Address{
  _id: string,
  street_address: string,
  lga: string,
  state: string,
  country: string
}

export interface Contractor{
  _id: string,
  name: string,
  personnel: Array<Staff>,
  headOffice: Branch
}
