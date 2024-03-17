import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { getUser } from "~/session.server";

export const meta: MetaFunction = () => [{ title: "tinyAMS" }];

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
       
    </main>
  );
}
