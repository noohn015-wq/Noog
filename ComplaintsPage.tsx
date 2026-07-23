import { useState } from "react";
import { MessageSquareWarning, Send, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { TranslationKeys } from "@/lib/i18n";

export function ComplaintsPage({ t, lang }: { t: TranslationKeys; lang: "ar" | "en" }) {
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    if (!subject || !details) {
      toast.error(lang === "ar" ? "يرجى ملء جميع الحقول" : "Please fill all fields");
      return;
    }
    toast.success(t.complaints.success);
    setSubject("");
    setDetails("");
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24 dark:bg-slate-900">
      <div className="flex flex-col items-center justify-center bg-amber-400 px-5 pb-6 pt-12 shadow-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
          <MessageSquareWarning className="h-7 w-7 text-slate-900" />
        </div>
        <h1 className="mt-3 text-2xl font-extrabold text-slate-900">{t.complaints.title}</h1>
        <p className="mt-1 text-center text-sm font-medium text-slate-800/80">{t.complaints.subtitle}</p>
      </div>

      <div className="px-5 pt-6">
        <Card className="rounded-2xl border-0 shadow-md">
          <CardContent className="space-y-4 p-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 dark:text-white">{t.complaints.subject}</label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={t.complaints.subjectPlaceholder}
                className="rounded-xl dark:bg-slate-800"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 dark:text-white">{t.complaints.details}</label>
              <Textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={t.complaints.detailsPlaceholder}
                className="min-h-32 rounded-xl dark:bg-slate-800"
              />
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full rounded-xl bg-amber-400 text-base font-bold text-slate-900 hover:bg-amber-500"
            >
              <Send className="h-5 w-5 rtl:rotate-180" />
              {t.complaints.submit}
            </Button>
          </CardContent>
        </Card>

        <div className="mt-4 flex items-center gap-2 rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-950/30">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
          <p className="text-xs text-emerald-700 dark:text-emerald-400">
            {lang === "ar" ? "نسعى للرد على جميع الشكاوي خلال 24 ساعة" : "We aim to respond to all complaints within 24 hours"}
          </p>
        </div>
      </div>
    </div>
  );
}