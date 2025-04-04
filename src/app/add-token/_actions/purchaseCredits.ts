"use server";

import { getAppUrl } from "@/lib/helper/appUrl";
import { stripe } from "@/lib/stripe/stripe";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import type { TokenPlan } from "../page";

export async function PurchaseCredits(tokenPlan: TokenPlan, price: number) {
  const { userId } = await auth();
  const user = await currentUser();

  const { amount, discount, name, description, token } = tokenPlan;

  if (!userId) {
    throw new Error("unauthenticated");
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: user?.emailAddresses[0].emailAddress,
    invoice_creation: {
      enabled: true,
    },
    success_url: getAppUrl(""),
    cancel_url: getAppUrl(""),
    metadata: {
      userId,
      name,
      token,
    },
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: name,
            description: description,
          },
          unit_amount: price,
        },
      },
    ],
  });

  if (!session.url) {
    throw new Error("cannot create stripe session");
  }

  redirect(session.url);
}
