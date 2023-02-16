import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import axios from 'axios'
import moment from 'moment/moment'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/question`)
  const list = await response.data

  return { props: { posts, list } }
}

export default function Home({ posts, list }) {
  const trimText = (str) => {
    var string = str
    var length = 180
    var trimmedString = ''
    return (trimmedString =
      string.length > length ? string.substring(0, length - 3) + '...' : string)
  }

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div
        className="w-full bg-black/40 bg-cover bg-blend-overlay"
        style={{ backgroundImage: `url('/static/images/team.png')`, height: '60vh' }}
      ></div>
      <div className="mx-auto max-w-6xl divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            Latest Parliament Questions
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!list.length && 'No posts found.'}
          {list.slice(0, MAX_DISPLAY).map((x, i) => {
            return (
              <li key={i} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time>{moment(x.created_at).fromNow()}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${x.id}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {x.question}
                            </Link>
                          </h2>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {trimText(x.description)}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${x.id}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${x.question}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {list.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
