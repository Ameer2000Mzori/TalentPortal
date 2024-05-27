import Header from '@/app/header/page'
import SearchForm from '@/app/form/page'
import JobsPage from './jobs/jobs'
export default function Home() {
  return (
    <div>
      <Header />
      <SearchForm />
      <JobsPage />
    </div>
  )
}
