import { PageSEO } from '@/components/SEO'
import axios from 'axios'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/getchampions`)
  const data = await response.data

  return { props: { data } }
}

export default function Index({ data }) {
  return (
    <>
      <PageSEO title={`Special seats`} description={`List of Special seats`} />
      <div className="mx-auto max-w-3xl divide-y divide-gray-200 px-4 dark:divide-gray-700 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Special seats
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!data.specialseat.length && 'There are no special seats currently.'}
          {data.specialseat.slice(0, MAX_DISPLAY).map((x, i) => {
            return (
              <li key={i} className="py-12">
                <article>
                  <div className="text-xl">
                    {x.title} {x.name}
                  </div>
                  <div className="text-base">
                    <b>Constituent:</b> {x.constituent.name}
                  </div>
                  <div className="text-base">
                    <b>Gender:</b> {x.gender == 1 ? 'Male' : 'Female'}
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
