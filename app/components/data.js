export const ourEvent = [
  {
    title: "Launch of the Hassan and Hussein Foundation",
    desc: "To hold tentatively on the 25th & 26th of August in Ekpoma, Edo State, Nigeria.",
  },
  {
    title: "Community Healthcare Interventions",
    desc: `Community healthcare outreach programs and fundraising for the state medical facility`,
  },
  {
    title: "Skill Acquisition and Empowerment Outreach",
    desc: `Skill acquisition training sessions and empowerment of trained youths`,
  },
  {
    title: "Education Summit and Awards",
    desc: `Identification of outstanding student and teachers with scholarship awards for the next academic year`,
  },
];

export const myPortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => (
      <h1 itemProp="heading" className="text-4xl py-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 itemProp="heading" className="text-3xl py-4 text-left">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 itemProp="heading" className="text-2xl py-4 text-left">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 itemProp="heading" className="text-xl py-4 text-left">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="bg-primary_text text-white p-12 rounded-md">
        {children}
      </blockquote>
    ),
    basic: ({ children }) => (
      <p itemProp="article" className="text-4xl text-justify">
        {children}
      </p>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <ul itemProp="list" className="list-disc list-inside p-5 space-y-3">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol itemProp="list" className="list-decimal list-inside p-5 space-y-3">
        {children}
      </ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }) => (
      <ol itemProp="list" className="m-auto text-lg">
        {children}
      </ol>
    ),
  },
};
