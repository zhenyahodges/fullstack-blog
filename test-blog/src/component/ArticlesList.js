import { Link } from 'react-router-dom';

const ArticlesList = ({articles}) => {
    return (
        <>
            {articles.map((a) => (
                <Link
                    key={a.name}
                    className='article-list-item'
                    to={`/articles/${a.name}`}
                >
                    <h3>{a.title}</h3>
                    <p>{a.content[0].substring(0, 150)}...</p>
                </Link>
            ))}
        </>
    );
};
export default ArticlesList;
