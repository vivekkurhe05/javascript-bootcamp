// Challenge area

const account = {
    name: 'Vivek Kurhe',
    expenses: [],
    income: [],
    addIncome: function (desc, amt) {
        this.income.push({
            description: desc,
            amount: amt
        })
    },
    addExpense: function (desc, amt) {
        this.expenses.push({
            description: desc,
            amount: amt
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let accountBalance = 0

        for(let i=0; i<this.expenses.length; i++) {
            totalExpenses += this.expenses[i].amount
        }

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        accountBalance = totalIncome - totalExpenses

        let rem = this.income[0].amount - totalExpenses
        
        return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.expenses)
console.log(account.income)
console.log(account.getAccountSummary())