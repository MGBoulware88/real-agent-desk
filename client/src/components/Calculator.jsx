import React from "react";
import { Form, Button } from "react-bootstrap";

const RealEstateCalculator = () => {
    const [salePrice, setSalePrice] = React.useState("");
    const [commissionRate, setCommissionRate] = React.useState("");
    const [closingCosts, setClosingCosts] = React.useState("");
    const [propertyTaxRate, setPropertyTaxRate] = React.useState("");
    const [propertyInsurance, setPropertyInsurance] = React.useState("");
    const [monthlyRent, setMonthlyRent] = React.useState("");
    const [vacancyRate, setVacancyRate] = React.useState("");
    const [maintenanceRate, setMaintenanceRate] = React.useState("");
    const [managementRate, setManagementRate] = React.useState("");

    const [netIncome, setNetIncome] = React.useState("");
    const [cashOnCashReturn, setCashOnCashReturn] = React.useState("");
    const [capRate, setCapRate] = React.useState("");

    const calculate = () => {
        const grossIncome = monthlyRent * 12;
        const vacancyLoss = grossIncome * (vacancyRate / 100);
        const effectiveGrossIncome = grossIncome - vacancyLoss;
        const operatingExpenses =
            effectiveGrossIncome *
            (maintenanceRate / 100 + managementRate / 100 + propertyTaxRate / 100) +
            propertyInsurance * 12 +
            closingCosts +
            (salePrice * (commissionRate / 100));
        const netIncome = effectiveGrossIncome - operatingExpenses;
        const cashOnCashReturn = (netIncome / (salePrice + closingCosts)) * 100;
        const capRate = (netIncome / salePrice) * 100;

        setNetIncome(netIncome.toFixed(2));
        setCashOnCashReturn(cashOnCashReturn.toFixed(2));
        setCapRate(capRate.toFixed(2));
    };

    return (
        <Form>
            <Form.Group controlId="salePrice">
                <Form.Label>Sale Price</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter sale price"
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="commissionRate">
                <Form.Label>Commission Rate (%)</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter commission rate"
                    value={commissionRate}
                    onChange={(e) => setCommissionRate(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="closingCosts">
                <Form.Label>Closing Costs</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter closing costs"
                    value={closingCosts}
                    onChange={(e) => setClosingCosts(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="propertyTaxRate">
                <Form.Label>Property Tax Rate (%)</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter property tax rate"
                    value={propertyTaxRate}
                    onChange={(e) => setPropertyTaxRate(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="propertyInsurance">
                <Form.Label>Property Insurance</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter property insurance"
                    value={propertyInsurance}
                    onChange={(e) => setPropertyInsurance(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="monthlyRent">
                <Form.Label>Monthly Rent</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter monthly rent"
                    value={monthlyRent}
                    onChange={(e) => setMonthlyRent(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="vacancyRate">
                <Form.Label>Vacancy Rate (%)</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter vacancy rate"
                    value={vacancyRate}
                    onChange={(e) => setVacancyRate(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="maintenanceRate">
                <Form.Label>Maintenance Rate (%)</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter maintenance rate"
                    value={maintenanceRate}
                    onChange={(e) => setMaintenanceRate(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="managementRate">
                <Form.Label>Management Rate (%)</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter management rate"
                    value={managementRate}
                    onChange={(e) => setManagementRate(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={calculate} className="my-3">
                Calculate
            </Button>

            {netIncome && (
                <div>
                    <h2>Results:</h2>
                    <p>Net Income: ${netIncome}</p>
                    <p>Cash on Cash Return: {cashOnCashReturn}%</p>
                    <p>Cap Rate: {capRate}%</p>
                </div>
            )}
        </Form>
    );
};

export default RealEstateCalculator;