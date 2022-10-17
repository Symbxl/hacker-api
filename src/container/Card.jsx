const Card = ({ stories }) => {
  console.log(stories)
  return (
    <div className="Cards">
      <h1>NEWS STORIES</h1>
      {stories?.map((story) => {
        return (
          <div key={story.id} className="Card">
            <a href={story?.url}>{story?.title}</a>
            <p>By: {story?.by}</p>
          </div>
        )
      })}
      <></>
    </div>
  )
}

export default Card