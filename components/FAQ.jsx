import FAQItem from './FAQItem'

export default function FAQ() {
  return (
    <div className="bg-brand-blue-light rounded-lg pt-4 px-4 items-center my-4">
      <h2 className="text-brand-blue font-semibold text-xl my-2 px-4">FAQ</h2>
      <div>
        <FAQItem
          first={true}
          title="How do I know the vaccines are safe? "
          content={`Canada has very high standards for vaccine safety. Health Canada only authorizes vaccines in Canada after a thorough and independent review of the scientific evidence.
        Once a vaccine is in use, Health Canada continues to monitor and can quickly have it removed if safety concerns are identified. All COVID-19 vaccines must be authorized for use by Health Canada.`}
        />

        <FAQItem
          title="After I am vaccinated, do I still need to follow all the public health guidelines? Do I still have to wear a mask?"
          content={`Canada has very high standards for vaccine safety. Health Canada only authorizes vaccines in Canada after a thorough and independent review of the scientific evidence.
        Once a vaccine is in use, Health Canada continues to monitor and can quickly have it removed if safety concerns are identified. All COVID-19 vaccines must be authorized for use by Health Canada.`}
        />

        <FAQItem
          title="Can I get COVID-19 from the vaccines? "
          content={`No. None of the COVID-19 vaccines currently in development use the live virus that causes COVID-19. There are several different types of vaccines in development. 
          The goal of each of the vaccines is to teach the immune system how to recognize and fight the virus that causes COVID-19.`}
        />
      </div>
    </div>
  )
}
