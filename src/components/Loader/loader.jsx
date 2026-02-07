import ContentLoader from 'react-content-loader'

export default function Loader() {
  return (
    <div>
        <ContentLoader
          speed={2}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="130" cy="130" r="130" />
          <rect x="0" y="275" rx="5" ry="5" width="260" height="27" />
          <rect x="0" y="311" rx="6" ry="6" width="260" height="91" />
          <rect x="0" y="413" rx="0" ry="0" width="87" height="35" />
          <rect x="143" y="413" rx="15" ry="15" width="119" height="35" />
        </ContentLoader>
    </div>
  )
}
