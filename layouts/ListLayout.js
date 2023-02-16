import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import moment from 'moment'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination, list }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const trimText = (str) => {
    var string = str
    var length = 180
    var trimmedString = ''
    return (trimmedString =
      string.length > length ? string.substring(0, length - 3) + '...' : string)
  }

  return (
    <>
      <div className="mx-auto max-w-3xl divide-y divide-gray-200 px-4 dark:divide-gray-700 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            {title}
          </h1>
        </div>
        <ul>
          {!list.length && 'No posts found.'}
          {list.map((x, i) => {
            // const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={x.i} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time>{moment(x.created_at).fromNow()}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${x.id}`} className="text-gray-900 dark:text-gray-100">
                          {x.question}
                        </Link>
                      </h3>
                      {/* <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div> */}
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {trimText(x.description)}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
