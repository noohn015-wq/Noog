import { Package, CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { TranslationKeys } from "@/lib/i18n";

export function OrdersPage({ t, lang }: { t: TranslationKeys; lang: "ar" | "en" }) {
  const activeOrders = [
    { id: "ORD-1024", restaurant: lang === "ar" ? "برجر هاوس" : "Burger House", status: "inProgress", time: "25 " + t.home.mins, items: 3 },
  ];

  const pastOrders = [
    { id: "ORD-1023", restaurant: lang === "ar" ? "بيتزا هت" : "Pizza Hut", status: "delivered", time: "12:30 PM", items: 2 },
    { id: "ORD-1022", restaurant: lang === "ar" ? "كافيه روز" : "Cafe Rose", status: "delivered", time: "Yesterday", items: 1 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 dark:bg-slate-900">
      <div className="flex flex-col items-center justify-center bg-amber-400 px-5 pb-6 pt-12 shadow-sm">
        <h1 className="text-2xl font-extrabold text-slate-900">{t.orders.title}</h1>
      </div>

      <div className="px-5 pt-6">
        {/* Active Orders */}
        <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">{t.orders.active}</h2>
        {activeOrders.length === 0 ? (
          <Card className="rounded-2xl border-0 shadow-md">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <Package className="h-12 w-12 text-slate-300 dark:text-slate-600" />
              <p className="mt-3 font-bold text-slate-700 dark:text-slate-200">{t.orders.empty}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.orders.emptyDesc}</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {activeOrders.map((order) => (
              <Card key={order.id} className="rounded-2xl border-0 shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
                        <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{order.restaurant}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">#{order.id} • {order.items} {lang === "ar" ? "منتجات" : "items"}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                      {t.orders.inProgress}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="h-3 w-3" />
                    <span>{order.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Past Orders */}
        <h2 className="mb-3 mt-6 text-lg font-bold text-slate-900 dark:text-white">{t.orders.past}</h2>
        <div className="space-y-3">
          {pastOrders.map((order) => (
            <Card key={order.id} className="rounded-2xl border-0 shadow-md">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{order.restaurant}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">#{order.id} • {order.items} {lang === "ar" ? "منتجات" : "items"}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    {t.orders.delivered}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Clock className="h-3 w-3" />
                  <span>{order.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}