"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PurchaseCredits } from "./_actions/purchaseCredits";

export type TokenPlan = {
  id: string;
  name: string;
  amount: number;
  discount: number;
  token: number;
  description: string;
};

const tokenPlans: TokenPlan[] = [
  {
    id: "1",
    name: "Basic",
    amount: 10000, // in cents ($100)
    discount: 5,
    token: 100, // number of tokens
    description: "Basic plan with 5% discount",
  },
  {
    id: "2",
    name: "Moderate",
    amount: 50000, // in cents ($500)
    discount: 10,
    token: 500,
    description: "Moderate plan with 10% discount",
  },
  {
    id: "3",
    name: "Premium",
    amount: 100000, // in cents ($1000)
    discount: 20,
    token: 1000,
    description: "Premium plan with 20% discount",
  },
];

export default function TokensPage() {
  return (
    <div className="p-6 space-y-6 text-center ">
      <h1 className="text-3xl font-extrabold text-gray-900">
        Choose Your Token Plan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tokenPlans.map((plan) => {
          const discountAmount = Math.floor(
            plan.amount * (plan.discount / 100)
          );
          const finalAmount = plan.amount - discountAmount;
          return (
            <Card
              key={plan.id}
              className="relative border border-gray-300 shadow-lg rounded-xl overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300"
            >
              <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 text-center">
                <CardTitle className="text-2xl font-semibold">
                  {plan.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center p-6">
                <p className="text-2xl font-medium text-gray-800">
                  Tokens: <span className="font-bold">{plan.token}</span>
                </p>
                <p className="text-lg font-medium text-gray-800">
                  Price:{" "}
                  <span className="font-bold">$ {plan.amount / 100}</span>
                </p>
                <span className="mt-2 bg-yellow-400 text-gray-900 text-sm px-3 py-1 rounded-full shadow-md">
                  {plan.discount}% Discount
                </span>
                <p className="mt-3 text-lg font-bold text-indigo-600">
                  Total After Discount:{" "}
                  <span className="text-xl">$ {finalAmount / 100}</span> Tokens
                </p>
                <Button
                  onClick={() => PurchaseCredits(plan, finalAmount)}
                  className="mt-4 bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
                >
                  Purchase
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
