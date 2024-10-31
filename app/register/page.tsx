import { RegistrationWizard } from "@/components/registration-wizard"

export default function RegisterPage() {
  return (
    <div className="container mx-auto py-8 sm:px-16 md:px-16 px-16">
      <h1 className="mb-6 text-3xl font-bold">Register Your Business</h1>
      <RegistrationWizard />
    </div>
  )
}