import { PageSEO } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSEO title={`About`} description={`About TGNP`} />
      <div className="mx-auto max-w-3xl  px-4  sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            About
          </h1>
        </div>
        <div className="pt-10">
          <div className="mb-4 text-2xl font-bold">Our History</div>
          <p>
            TGNP was formed in 1993 as an activist non-profit organization, and in 2012 was
            registered as TGNP Mtandao Limited. TGNP emerged through a collective process of
            critical reflection by leaders of key women’s and gender organizations about the
            situation of women who are the most exploited and oppressed people within the exploited
            laboring classes. TGNP’s Ideology and philosophy is built on Transformative feminism,
            which is a struggle that aims to eliminate all forms of discrimination against women and
            other marginalized groups, whether due to class, sex, gender, age, ethnicity,
            disability, geographical and nationality locations.
          </p>
        </div>

        <div className="pt-10">
          <div className="mb-4 text-2xl font-bold">Goal</div>
          <p>
            A goal is to facilitate the transformative feminist movement that influence and
            contribute to gender responsiveness of policy formulation and implementation in the
            areas of Agriculture, Water, Health, Education and Extractive Industries, for equitable
            resource allocation and sustainable livelihoods
          </p>
        </div>

        <div className="pt-10">
          <div className="mb-4 text-2xl font-bold">Vision</div>
          <p>
            To see a Transformed Tanzania society where there is gender equality, equity and social
            justice
          </p>
        </div>

        <div className="pt-10">
          <div className="mb-4 text-2xl font-bold">Mission</div>
          <p>
            To build a transformative feminist movement for social, gender transformation and women
            empowerment.
          </p>
        </div>
      </div>
    </>
  )
}
