import { Package, CreditCard, Bell, HelpCircle, LogOut, ChevronLeft, Star, Gift } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import type { TranslationKeys } from "@/lib/i18n";

export function AccountPage({ t, lang }: { t: TranslationKeys; lang: "ar" | "en" }) {
  const menuItems = [
    { icon: Package, label: t.account.orders, desc: t.account.ordersDesc },
    { icon: Star, label: t.account.favorites, desc: t.account.favoritesDesc },
    { icon: CreditCard, label: t.account.payment, desc: t.account.paymentDesc },
    { icon: Gift, label: t.account.rewards, desc: t.account.rewardsDesc },
    { icon: Bell, label: t.account.notifications, desc: t.account.notificationsDesc, toggle: true },
    { icon: HelpCircle, label: t.account.help, desc: t.account.helpDesc },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 dark:bg-slate-900">
      {/* Profile Header */}
      <div className="flex flex-col items-center justify-center bg-amber-400 px-5 pb-8 pt-16">
        <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
          <AvatarFallback className="bg-slate-900 text-2xl font-bold text-amber-400">
            {lang === "ar" ? "ع" : "U"}
          </AvatarFallback>
        </Avatar>
        <h2 className="mt-3 text-xl font-extrabold text-slate-900">
          {lang === "ar" ? "عبدالله محمد" : "Abdullah M."}
        </h2>
        <p className="text-sm font-medium text-slate-800/80">
          {lang === "ar" ? "عضو ذهبي ⭐" : "Gold Member ⭐"}
        </p>
      </div>

      {/* Stats */}
      <div className="relative z-10 grid grid-cols-3 gap-3 px-5 -mt-6">
        {[
          { value: "24", label: t.account.statOrders },
          { value: "15", label: t.account.statFavorites },
          { value: "1.2k", label: t.account.statPoints },
        ].map((stat) => (
          <Card key={stat.label} className="border-0 shadow-md">
            <CardContent className="flex flex-col items-center justify-center p-3">
              <span className="text-lg font-extrabold text-slate-900 dark:text-white">{stat.value}</span>
              <span className="text-center text-[10px] font-medium text-slate-500 dark:text-slate-400">{stat.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Menu */}
      <div className="px-5 pt-6">
        <Card className="overflow-hidden rounded-2xl border-0 shadow-md">
          <CardContent className="p-0">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center justify-between p-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 ${
                    index !== menuItems.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
                      <Icon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{item.label}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                  {item.toggle ? (
                    <Switch defaultChecked />
                  ) : (
                    <ChevronLeft className="h-5 w-5 text-slate-400 rtl:rotate-180" />
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Logout */}
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-600 transition-colors hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-900/40">
          <LogOut className="h-5 w-5 rtl:rotate-180" />
          {t.account.logout}
        </button>
      </div>
    </div>
  );
}