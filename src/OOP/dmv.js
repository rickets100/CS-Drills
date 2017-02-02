class DMV {

  constructor(agents) {
    this.agents = agents
    this.freeAgents = agents.slice(0)
    this.queue = []
    this.attending = {}
  }

  customersInLine() {
    return this.queue
  }

  enter (person) {
    this.queue.push(person)
  }

  currentCustomerFor(agent) {
    return this.attending[agent] || null
  }

  nextCustomer() {
    this.attending[this.freeAgents[0]] = this.queue.shift()
    this.freeAgents.shift()
  }

  resolve(customer) {
    for (var agent in this.attending) {
      let attendedCustomer = this.attending[agent]
      if (customer === attendedCustomer) {
        delete this.attending[agent]
        this.freeAgents.push(agent)
      }
    }
  }

}

module.exports = DMV;
