import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import { sendContactEmail } from "~/lib/email";
import { cn } from "~/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid business email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  service: z.enum(["Digital Marketing", "Branding & Identity", "SEO Strategy", "Web Development", "Performance Ads", "Social Growth"], {
    errorMap: () => ({ message: "Please select a service" }),
  }),
  message: z.string().min(10, "Please provide more details about your goals (min 10 chars)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "Digital Marketing",
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setError(null);
      await sendContactEmail({ data });
      setIsSuccess(true);
      reset();
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly.");
      console.error(err);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 sm:p-10 md:p-12 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl text-center"
          >
            <div className="h-16 w-16 sm:h-20 sm:w-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-4 text-slate-900 dark:text-white">Strategy Request Received</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 text-base sm:text-lg">
              Our elite strategy team has been notified. We will review your business profile and contact you within 24 hours.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-blue-600 font-bold hover:underline text-sm sm:text-base"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit(onSubmit)}
            className="p-5 sm:p-8 md:p-10 lg:p-12 rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-900/5"
          >
            <div className="grid gap-6 sm:gap-8">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 sm:ml-4">Full Name</label>
                  <input
                    {...register("name")}
                    autoComplete="name"
                    autoCapitalize="words"
                    placeholder="John Doe"
                    className={cn(
                      "w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-base focus:ring-0 focus:border-blue-600 transition-all outline-none",
                      errors.name && "border-red-500/50 bg-red-50/50 dark:bg-red-900/10"
                    )}
                  />
                  {errors.name && <p className="text-xs font-bold text-red-500 ml-1 sm:ml-4">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 sm:ml-4">Business Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCapitalize="none"
                    autoCorrect="off"
                    placeholder="john@company.com"
                    className={cn(
                      "w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-base focus:ring-0 focus:border-blue-600 transition-all outline-none",
                      errors.email && "border-red-500/50 bg-red-50/50 dark:bg-red-900/10"
                    )}
                  />
                  {errors.email && <p className="text-xs font-bold text-red-500 ml-1 sm:ml-4">{errors.email.message}</p>}
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 sm:ml-4">Phone Number</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+91 00000 00000"
                    className={cn(
                      "w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-base focus:ring-0 focus:border-blue-600 transition-all outline-none",
                      errors.phone && "border-red-500/50 bg-red-50/50 dark:bg-red-900/10"
                    )}
                  />
                  {errors.phone && <p className="text-xs font-bold text-red-500 ml-1 sm:ml-4">{errors.phone.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 sm:ml-4">Company Name</label>
                  <input
                    {...register("company")}
                    autoComplete="organization"
                    placeholder="Acme Corp"
                    className={cn(
                      "w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-base focus:ring-0 focus:border-blue-600 transition-all outline-none",
                      errors.company && "border-red-500/50 bg-red-50/50 dark:bg-red-900/10"
                    )}
                  />
                  {errors.company && <p className="text-xs font-bold text-red-500 ml-1 sm:ml-4">{errors.company.message}</p>}
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 sm:ml-4">Interested In</label>
                <select
                  {...register("service")}
                  className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-base focus:ring-0 focus:border-blue-600 transition-all outline-none appearance-none cursor-pointer"
                >
                  <option>Digital Marketing</option>
                  <option>Branding & Identity</option>
                  <option>SEO Strategy</option>
                  <option>Web Development</option>
                  <option>Performance Ads</option>
                  <option>Social Growth</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 sm:ml-4">Project Goals</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  autoComplete="off"
                  placeholder="Describe your growth objectives and current challenges..."
                  className={cn(
                    "w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-base focus:ring-0 focus:border-blue-600 transition-all outline-none resize-none",
                    errors.message && "border-red-500/50 bg-red-50/50 dark:bg-red-900/10"
                  )}
                />
                {errors.message && <p className="text-xs font-bold text-red-500 ml-1 sm:ml-4">{errors.message.message}</p>}
              </div>

              {error && (
                <div className="p-3 sm:p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 flex items-center gap-3 text-red-600 dark:text-red-400">
                  <AlertCircle size={18} />
                  <p className="text-xs sm:text-sm font-bold">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "btn-premium py-4 sm:py-5 text-base sm:text-lg w-full flex items-center justify-center gap-3 active:scale-[0.98] transition-all",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Processing Strategy...
                  </>
                ) : (
                  <>
                    Send Growth Request <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
