import Board from './Board.vue'

describe('<Board />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Board)
  })
})