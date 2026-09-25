import StatCard from "@/components/statCard";
import UserTable from "@/components/UserTable";
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { getUsers } from "@/lib/data";
import type { UserQuery } from "@/types/user-query";

const stats = [
  {
    title: "Total Users",
    value: "1,284",
    change: "+12.5%",
    description: "from last month",
    icon: Users,
    trend: "up" as const,
  },
  {
    title: "Products",
    value: "326",
    change: "+8.2%",
    description: "from last month",
    icon: Package,
    trend: "up" as const,
  },
  {
    title: "Revenue",
    value: "$24,780",
    change: "+18.4%",
    description: "from last month",
    icon: DollarSign,
    trend: "up" as const,
  },
  {
    title: "Orders",
    value: "892",
    change: "-3.1%",
    description: "from last month",
    icon: ShoppingCart,
    trend: "down" as const,
  },
];

export default async function DashboardPage() {
  const users = await getUsers();
  const recentUsers = users.slice(0, 5);
  const query: UserQuery = {
    order: "asc",
    page: 1,
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Page Heading */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-1 text-sm font-medium text-muted-foreground">
            Overview
          </p>

          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-1.5 text-sm text-muted-foreground">
            Welcome back. Here&apos;s what&apos;s happening with your workspace.
          </p>
        </div>

        <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
          <span className="size-2 rounded-full bg-emerald-500" />
          All systems operational
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      {/* Recent Users */}
      <section>
        <UserTable
          users={recentUsers}
          query={query}
          pagination={{
            currentPage: 1,
            totalPages: 1,
            totalItems: recentUsers.length,
            pageSize: 10,
          }}
        />
      </section>
    </div>
  );
}
