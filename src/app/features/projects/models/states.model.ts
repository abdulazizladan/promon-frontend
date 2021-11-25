export interface State{
  name: string,
  capital: string,
  states: [
    {
      name: string,
      capital: string,
      lgas: [
        {
          name: string,
          towns: [
            {
              name: string
            }
          ]
        }
      ]
    }
  ]
}
