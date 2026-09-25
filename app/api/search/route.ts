import { auth } from "@/auth";
import { getUsers } from "@/lib/data";
import { getProducts } from "@/lib/products";

const RESULT_LIMIT = 5;

export async function GET(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const query = new URL(request.url).searchParams.get("q")?.trim().slice(0, 80).toLowerCase();

  if (!query) {
    return Response.json({ users: [], products: [] });
  }

  const [users, products] = await Promise.all([getUsers(), getProducts()]);

  return Response.json(
    {
      users: users
        .filter((user) =>
          [user.name, user.email, String(user.id)].some((value) =>
            value.toLowerCase().includes(query),
          ),
        )
        .slice(0, RESULT_LIMIT)
        .map(({ id, name, email }) => ({ id, name, email })),
      products: products
        .filter((product) =>
          [product.name, product.category, String(product.id)].some((value) =>
            value.toLowerCase().includes(query),
          ),
        )
        .slice(0, RESULT_LIMIT)
        .map(({ id, name, category }) => ({ id, name, category })),
    },
    { headers: { "Cache-Control": "private, no-store" } },
  );
}
