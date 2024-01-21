import {Accounting} from "./Accounting";

// Бюджет
export class Budget {
    private budgetData: string[] = [];

    getBudgetData() {
        return this.budgetData;
    }

    manageBudget():void {
        // Логіка управління бюджетом
        const profitGrowth = new Accounting().generateFinancialReports();
        if(profitGrowth !== undefined && profitGrowth > 0) {
            //console.log("Managing budget.");
            this.budgetData.push("Expenses can be increased");
        }
        this.budgetData.push("Expenses can not be increased");
    }

    generateFinancialReports():void {
        // Логіка генерації фінансових звітів
        const financialReportDate = new Date().getDate();
        if(financialReportDate === 20) {
            console.log("Generating financial reports for budget.");
        }
    }
}
