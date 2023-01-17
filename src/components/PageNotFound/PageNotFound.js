import './PageNotFound.scss'

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h3>
        Hmmmm, that's not a valid page. Click <a href="/">Home</a> or{' '}
        <a href="/my-memes">My Memes</a> to keep meming.
      </h3>
    </div>
  )
}

export default PageNotFound
