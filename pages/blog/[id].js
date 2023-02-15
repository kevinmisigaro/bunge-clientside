import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import axios from 'axios'

export async function getServerSideProps(context) {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/question`)
  const json_response = await response.data

  const data = json_response.find((x) => x.id == context.params.id)

  return {
    props: {
      data,
    },
  }
}

export default function Index({ data }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            {data?.question}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{data?.description}</p>
        </div>
      </div>
    </>
  )
}
